import axios from 'axios';
import { useRef, useState } from 'react';
import './excel.css';

function Excel() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [dataType, setDataType] = useState('product'); // データタイプのステートを追加

  const downloadExcel = async (dataType: string) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/excel/download',
        { dataType },
        { responseType: 'blob' }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${dataType}_data.xlsx`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('ファイルのダウンロードに失敗しました:', error);
    }
  };

  const uploadExcel = async () => {
    if (fileInputRef.current?.files) {
      const file = fileInputRef.current.files[0];
      if (!file) {
        console.error('ファイルが選択されていません');
        return;
      }
      const formData = new FormData();
      formData.append('file', file);
      try {
        const response = await axios.post('http://localhost:4000/excel/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // サーバーからのレスポンスを表示
        console.log('ファイルアップロード成功:', response.data);
        alert(response.data.message);
      } catch (error) {
        console.error('ファイルアップロード失敗:', error);
        alert('ファイルアップロードに失敗しました');
      }
    } else {
      console.error('ファイルが選択されていません');
    }
  };

  const handleFileChange = () => {
    if (fileInputRef.current?.files) {
      const file = fileInputRef.current.files[0];
      setFileName(file ? file.name : null);
    }
  };

  return (
    <div className="excel-container">
      <div className="download-section">
        <label htmlFor="dataType">
          追加・編集するデータの種類:
          <select
            name="dataType"
            id="dataType"
            value={dataType}
            onChange={(e) => setDataType(e.target.value)} // 選択された値をステートに設定
          >
            <option value="product">商品データ</option>
            <option value="shop">店舗データ</option>
          </select>
        </label>
        <button
          className="download-button"
          onClick={() => downloadExcel(dataType)}
        >
          Excelをダウンロード
        </button>
      </div>
      <div className="upload-section">
        <input 
          type="file" 
          ref={fileInputRef} 
          accept='.xlsx' 
          onChange={handleFileChange} 
          style={{ display: 'none' }}
        />
        <button className="select-file-button" onClick={() => fileInputRef.current?.click()}>ファイルを選択</button>
        {fileName && <p className="file-name">選択されたファイル: {fileName}</p>}
        <button className="upload-button" onClick={uploadExcel}>Excelをアップロード</button>
      </div>
    </div>
  );
}

export default Excel;
