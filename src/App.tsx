import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <button className="orange-button" onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <form>
              <div className="question">
                <p>Har du husdyr?</p>
                <label><input type="radio" name="q1" value="ja" /> Ja</label>
                <label><input type="radio" name="q1" value="nej" /> Nej</label>
              </div>
              <div className="question">
                <p>Ryger du?</p>
                <label><input type="radio" name="q2" value="ja" /> Ja</label>
                <label><input type="radio" name="q2" value="nej" /> Nej</label>
              </div>
              <div className="question">
                <p>???</p>
                <label><input type="radio" name="q3" value="1" /> 1</label>
                <label><input type="radio" name="q3" value="2" /> 2</label>
                <label><input type="radio" name="q3" value="3" /> 3</label>
              </div>
            </form>
            <button className="orange-button" onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;