import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type Props = {
  initialValues: number[];
  setNewPrices: (nuevoPrecioMin: number, nuevoPrecioMax: number) => void;
  values: number[];
};

export default function SliderRange({ initialValues, setNewPrices, values = [0, 0] }: Props) {
  const [sliderValues, setSliderValues] = useState<number[]>([]);
  const [newRange, setNewRange] = useState<boolean>(false);

  useEffect(() => {
    setNewPrices(initialValues[0], initialValues[1]);
    setSliderValues(initialValues);
  }, [initialValues]);

  useEffect(() => {
    if (values[0] === initialValues[0] && values[1] === initialValues[1]) {
      setSliderValues(initialValues);
    }
  }, [values]);

  useEffect(() => {
    if (sliderValues[0] === values[0] && sliderValues[1] === values[1]) {
      setNewRange(false);
    }
  }, [sliderValues]);

  const handleChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValues(value);
      if (!newRange) {
        setNewRange(true);
      }
    }
  };

  const handleApply = () => {
    setNewRange(false);
    setNewPrices(sliderValues[0], sliderValues[1]);
  };

  return (
    <div className="w-full">
      <Slider
        range
        min={initialValues[0]}
        max={initialValues[1]}
        step={10}
        value={sliderValues}
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
        <span>${sliderValues[0]}</span>
        <span>${sliderValues[1]}</span>
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
