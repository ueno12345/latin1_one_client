import axios from 'axios';
import { useRef, useState } from 'react';
import './excel.css'; // スタイルを外部CSSファイルに分ける

function Excel() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null); // 選択されたファイル名を保存するステート

  const downloadExcel = async () => {
    try {
      const response = await axios.get('http://localhost:4000/excel/download', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'example.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Excelファイルのダウンロードに失敗しました:', error);
    }
  };

  const uploadExcel = async () => {
    if (fileInputRef.current?.files) {
      const file = fileInputRef.current.files[0]; // ファイルを取得
      if (!file) {
        console.error('ファイルが選択されていません');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      try {
        await axios.post('http://localhost:4000/excel/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('ファイルアップロード成功');
      } catch (error) {
        console.error('ファイルアップロード失敗:', error);
      }
    } else {
      console.error('ファイルが選択されていません');
    }
  };

  const handleFileChange = () => {
    if (fileInputRef.current?.files) {
      const file = fileInputRef.current.files[0];
      setFileName(file ? file.name : null); // 選択されたファイル名をセット
    }
  };

  return (
    <div className="excel-container">
      <div className="download-section">
        <button className="download-button" onClick={downloadExcel}>Excelをダウンロード</button>
      </div>
      <div className="upload-section">
        <input 
          type="file" 
          ref={fileInputRef} 
          accept='.xlsx' 
          onChange={handleFileChange} 
          style={{ display: 'none' }} // ファイル入力を隠す
        />
        <button className="select-file-button" onClick={() => fileInputRef.current?.click()}>ファイルを選択</button>
        {fileName && <p className="file-name">選択されたファイル: {fileName}</p>} {/* 選択されたファイル名を表示 */}
        <button className="upload-button" onClick={uploadExcel}>Excelをアップロード</button>
      </div>
    </div>
  );
}

export default Excel;
