import { useState } from "react";
import "./App.css";

export const App = () => {
  const [records, setRecords] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newTime, setNewTime] = useState("");
  const [error, setError] = useState("");
  const [totalTime, setTotalTime] = useState(0);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleTimeChange = (e) => {
    setNewTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (newTitle.trim() === "" && newTime.trim() === ""){
        setError("学習内容と学習時間を入力してください");
      } else if (newTitle.trim() === "" && newTime.trim() !== "") {
        setError("学習内容を入力してください");
      } else if (newTime.trim() === "" && newTitle.trim() !== ""){
        setError("学習時間を入力してください");
      } else {
        setRecords([...records, { title: newTitle, time: Number(newTime) }]);
        setNewTitle("");
        setNewTime("");
        setError("");
        setTotalTime(totalTime + Number(newTime));
    }
  };

  return (
    <>
      <h1>学習記録一覧</h1>
      <div className="study-list">
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              <span>{record.title}</span>
              <span> </span>
              <span>{record.time}時間</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="study-input-form">
        <div>
          <label htmlFor="title">学習内容</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="学習内容を入力"
            value={newTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="time">学習時間</label>
          <input
            type="number"
            id="time"
            name="time"
            placeholder="学習時間を入力"
            value={newTime}
            onChange={handleTimeChange}
          />
          <span>時間</span>
        </div>
        <div>
          <p>入力されている学習内容：{newTitle}</p>
          <p>入力されている時間：{newTime}</p>
        </div>
        <button onClick={handleSubmit}>記録を追加</button>
        <p>{error}</p>
        <p>合計時間：{totalTime}/1000(h)</p>
      </div>
    </>
  );
};
