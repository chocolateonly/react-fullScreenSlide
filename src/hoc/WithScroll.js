import React from "react";

const mount = (that) => {
  window.addEventListener('wheel', that.handleMouseScroll);
};

const unmount = (that) => {
  window.removeEventListener('wheel', that.handleMouseScroll);
};

const withScroll = () => WrappedComponent => {
  return class  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isScrollToTop: true,
      }
    }

    handleMouseScroll = e => {
      //console.log(e);
      if (e.deltaY > 0) {
        this.setState({
          isScrollToTop: false
        })
      } else {
        this.setState({
          isScrollToTop: true
        })
      }
    };


    componentDidMount() {
      mount(this);
    }

    componentWillUnmount() {
      unmount(this);
    }

    render() {
      const {isScrollToTop} = this.state;
      const props = {...this.props, isScrollToTop};
      return <WrappedComponent {...props}/>
    }

  }
};

export default withScroll;