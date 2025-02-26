export function fileSize(size: number) {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    Number((size / Math.pow(1024, i)).toFixed(2)) +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
}


export function statusOpt(){
  return [
    { value: "1", label: 'Active' },
    { value: "0", label: 'Inactive' }
  ];
}

export function requiredOpt(){
  return [
    { value: "0", label: 'No' },
    { value: "1", label: 'Yes' }
  ];
}

export function inputsType(){
  return [
    { value: 'text', label: 'Input' },
    { value: 'number', label: 'Number' },
    { value: 'file', label: 'File' },
    { value: 'textarea', label: 'Textarea' },
    { value: 'checkbox', label: 'Checkbox' },
    { value: 'selectbox', label: 'Selectbox' },
    { value: 'radio', label: 'Radio Button' },
    { value: 'rating', label: 'Rating' },
    { value: 'date', label: 'Date' },
    { value: 'datetime-local', label: 'Date time' },
  ];
}


