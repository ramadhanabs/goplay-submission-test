import { useEffect, useState } from 'react';
import { numberToText } from '../../lib/helper/numberToText';
import Input from '../../components/input';

function NumberToTextApp() {
  const [input, setInput] = useState(0);
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const convertText = () => {
      if (input.length > 15) return;
      const str = numberToText(input);
      setText(str);
    };

    convertText();
  }, [input]);
  return (
    <div>
      <div className="row mb-3">
        <div className="col-6 mr-4">
          <div className="mb-4">
            <p className="regular-metadata mb-2">Number:</p>
            <Input
              type="number"
              placeholder="Input your number"
              onChange={handleInput}
              block
            />
          </div>

          <div>
            <p className="bold-metadata mb-2">How to use:</p>
            <p className="regular-metadata">
              You can simply convert from number to words. But remember this
              converter still has limitation, you can only input maximum
              15-digit number. So, make sure your input is no longer than
              15-digit 😁
            </p>
          </div>
        </div>
        <div className="col-6">
          <p className="regular-metadata mb-2">Converted Text:</p>
          <p className="bold-body">{text || '--'}</p>
        </div>
      </div>
    </div>
  );
}

export default NumberToTextApp;
