import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { delay } from '../util/utility';
import { classNames } from '../util/tailwind';

const Alert = ({
  value,
  color,
  setValue,
}: {
  value: string;
  color: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    delay(10000).then(() => setValue(''));
  }, [value]);

  if (!value) return <></>;

  return (
    <div>
      <h1 className={classNames('text-3xl rounded p-1 mx-4', color)}>
        {value}
      </h1>
    </div>
  );
};

export default Alert;
