import { useEffect, useState } from 'react';
import { numberToText } from '../../lib/numberToText';
import Input from '../../components/input';

function NumberToTextApp() {
  const [input, setInput] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const convertText = () => {
      const str = numberToText(input);
      setText(str);
    };

    convertText();
  }, [input]);
  return (
    <div>
      <div className="mb-3">
        <p className="regular-metadata mb-2">Input your number here:</p>
        <Input
          type="number"
          placeholder="Input your number"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>

      <div>
        <p className="regular-metadata mb-2">Your converted text:</p>
        <p className="bold-body">{text || '--'}</p>
      </div>
    </div>
  );
}

export default NumberToTextApp;
