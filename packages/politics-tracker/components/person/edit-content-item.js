import React, { Fragment } from 'react'
import styled from 'styled-components'

import { ContentItemContainer, ContentItemTitle } from './content-item'

const EditContentItemContainer = styled(ContentItemContainer)`
  ${({ theme }) => theme.breakpoint.md} {
    flex-direction: column;
  }
`
const EditContentItemTitle = styled(ContentItemTitle)`
  margin-bottom: 8px;
  .required {
    color: ${({ theme }) => theme.textColor.red};
  }
`
const EditContentItemDescription = styled.p`
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.textColor.gray};
  ${({ theme }) => theme.breakpoint.md} {
    font-size: 16px;
  }
`
const EditContentItemInput = styled.input`
  font-size: 18px;
  padding: 8px 16px;
  margin-top: 8px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  user-select: none;

  ::placeholder {
    color: ${({ theme }) => theme.textColor.black30};
  }
  &:focus {
    outline: none;
  }
`

const EditContentItemRadioContainer = styled.div`
  display: flex;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 2px;
  margin-right: 20px;
`
const RadioButtonLabel = styled.label`
  position: absolute;
  top: 0;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 2px solid rgba(15, 45, 53, 0.3);
`
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: ${({ theme }) => theme.backgroundColor.white};

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin: 2px;
      background: ${({ theme }) => theme.backgroundColor.blue};
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: ${({ theme }) => theme.backgroundColor.white};
    border: 2px solid black;

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin: 2px;
      background: ${({ theme }) => theme.backgroundColor.blue};
    }
  }
`
/**
 *
 * @param {Object} props
 * @param {import('./edit-content-basic').EditContentBasic["options"]} props.options
 * @returns {React.ReactElement}
 */
const EditContentItemRadio = ({ options }) => {
  return (
    <Fragment>
      {options && (
        <EditContentItemRadioContainer>
          {options.map((item, index) => (
            <Item key={index}>
              <RadioButton type="radio" name="radio" value={item} />
              <RadioButtonLabel />
              <div>{item}</div>
            </Item>
          ))}
        </EditContentItemRadioContainer>
      )}
    </Fragment>
  )
}

/**
 * @param {import('./edit-content-basic').EditContentBasic} props
 * @returns {React.ReactElement}
 */
export default function EditContentItem({
  name,
  title,
  isRequired,
  description,
  placeholder,
  type,
  options,
}) {
  return (
    <EditContentItemContainer>
      <EditContentItemTitle as="label" htmlFor={name}>
        {title}
        {isRequired && <span className="required">（必填）</span>}
      </EditContentItemTitle>
      {description?.split('\n').map((item, index) => (
        <EditContentItemDescription key={index}>
          {item}
        </EditContentItemDescription>
      ))}
      {type === 'input' && (
        <EditContentItemInput id={name} placeholder={placeholder} />
      )}

      {type === 'radio' && (
        <EditContentItemRadio options={options}></EditContentItemRadio>
      )}
    </EditContentItemContainer>
  )
}