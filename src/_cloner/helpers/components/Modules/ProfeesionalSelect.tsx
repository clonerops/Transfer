import { useState } from "react";
import Select from "react-select";

const ProfessionalSelect = (props: any) => {
    const [inputValue, setInputValue] = useState("");

    const customStyles = {
        control: (provided: any, state: any) => ({
          ...provided,
          background: '#fff',
          minHeight: '30px',
          height: '30px',
          boxShadow: state.isFocused ? null : null,
        }),
    
        // valueContainer: (provided: any, state: any) => ({
        //   ...provided,
        // //   height: '30px',
        // //   padding: '0 6px'
        // }),
    
        // input: (provided: any, state: any) => ({
        //   ...provided,
        // }),
        // indicatorSeparator: (state: any) => ({
        // //   display: 'block',
        // }),
        indicatorsContainer: (provided: any, state: any) => ({
          ...provided,
          height: '30px',
        }),
      };
    const handleKeyDown = (event: any) => {
        if (event.key === " " && !inputValue) {
            event.preventDefault(); // Prevent space from being entered in the search input
            setInputValue(" "); // Set the search input value to a space
        }
    };
    const handleInputChange = (value: any) => {
        setInputValue(value);
    };

    const customFilterOption = (option: any, rawInput: any) => {
        const inputValue = rawInput.trim().toLowerCase();
        const inputCharacters = inputValue.split("");

        return inputCharacters.every((char: any) => {
            return option.label.toLowerCase().includes(char);
        });
    };

    return (
        <div
            style={{
                minWidth: "12vw",
                gap: 8,
            }}
        >
            <label className="text-sm">{props.title}</label>
            {props.custom ? (
                <Select
                    options={props.options}
                    onChange={props.onChange}
                    defaultInputValue={props.defaultInputValue}
                    className="rounded-md text-md"
                    defaultValue={props.defaultValue}
                    value={props.value}
                    isDisabled={props.disabled}
                    placeholder={props.placeholder}
                    inputValue={inputValue}
                    name={props.name}
                    styles={customStyles}
                    onInputChange={handleInputChange}
                    autoFocus={props.autoFocus}
                    onKeyDown={handleKeyDown}
                    filterOption={customFilterOption}
                    isSearchable
                />
            ) : (
                <Select
                    {...props.getFieldProps(props.name)}
                    options={props.options}
                    onChange={props.onChange}
                    defaultInputValue={props.defaultInputValue}
                    className="rounded-md text-md"
                    defaultValue={props.defaultValue}
                    placeholder={props.placeholder}
                    inputValue={inputValue}
                    isDisabled={props.disabled}
                    name={props.name}
                    styles={customStyles}
                    onInputChange={handleInputChange}
                    autoFocus={props.autoFocus}
                    onKeyDown={handleKeyDown}
                    filterOption={customFilterOption}
                    isSearchable
                />
            )}
        </div>
    );
};

export default ProfessionalSelect;