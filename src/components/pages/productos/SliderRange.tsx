import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type Props = {
  initialValues: number[];
  setNewPrices: (nuevoPrecioMin: number, nuevoPrecioMax: number) => void;
};

export default function SliderRange({ initialValues, setNewPrices }: Props) {
  const [values, setValues] = useState(initialValues);
  const [newRange, setNewRange] = useState<boolean>(false);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = (value: any) => {
    setValues(value);
    if (!newRange) {
      setNewRange(true);
    }
  };

  const handleApply = () => {
    setNewRange(false);
    setNewPrices(values[0], values[1]);
  };

  return (
    <div className="w-full">
      <Slider
        range
        min={initialValues[0]}
        max={initialValues[1]}
        step={10}
        value={values}
        onChange={handleChange}
        trackStyle={[{ backgroundColor: '#CF8420' }]}
        handleStyle={[
          { backgroundColor: '#ffffff', borderColor: '#CF8420' },
          { backgroundColor: '#ffffff', borderColor: '#CF8420' },
        ]}
        railStyle={{ backgroundColor: '#cbd5e0' }}
        draggableTrack={true}
      />
      <div className="flex justify-between">
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>
      {newRange && (
        <button
          className="button-primary bg-primary text-white ml-auto mt-3 block"
          onClick={handleApply}
        >
          Aplicar
        </button>
      )}
    </div>
  );
}
