import React from "react";
import Slider, { SliderTooltip } from "rc-slider";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;

  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`$${value}`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};
class RangeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 50,
      rangeValue: this.props.defaultValue,
    };
  }
  onSliderChange = (v) => {
    this.setState({ sliderValue: v });
  };
  onRangeChange = (v) => {
    this.setState({ rangeValue: v });
  };
  onAfterSliderChange = (value) => {
    this.props.onChange(value);
  };
  onAfterRangeChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const { type, marks, step, defaultValue, max, allowCross } = props;
    const { sliderValue, RangeValue } = this.state;
    return (
      <>
        {type === slider ? (
          <Slider
            className="slider"
            reverse
            marks={marks}
            defaultValue={defaultValue}
            dots
            value={sliderValue}
            allowCross={allowCross}
            onChange={this.onSliderChange}
            onAfterChange={this.onAfterSliderChange}
            step={step}
          />
        ) : (
          <Range
            className="slider"
            pushable={10}
            allowCross={allowCross}
            min={1}
            max={max}
            step={step}
            marks={marks}
            defaultValue={defaultValue}
            handle={handle}
            value={rangeValue}
            onChange={this.onSliderChange}
            tipFormatter={(value) => `$${value}`}
            onAfterChange={this.onAfterSliderChange}
          />
        )}
      </>
    );
  }
}

RangeSlider.defaultProps = {
  type: "range",
  allowCross: true,
};

export default RangeSlider;