# Dropdown component

A simple React dropdown component written as part of the Hive.ai coding assignment.

## Steps to run

### install dependencies
```sh
npm install
```

### Running locally
```sh
npm run start
```

## How to use the dropdown component
### Single dropdown
```jsx
<Dropdown
    type="single"
    options={options}
    onDropdownChange={onDropdownChangeSingle}
    renderOption={(option) => option.value} 
/>
```

### Multi dropdown
```jsx
<Dropdown
    type="multi"
    options={options}
    onDropdownChange={onDropdownChangeSingle}
    renderOption={(option) => option.value} 
/>
```
