import React, {Component} from 'react';

class SectionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 0
    }
  }

  goNext = (activeSection) => {
    const {sections} = this.props;
    return this.setState({activeSection}, () => {
      this.scrollToAnchor(sections[activeSection])
    });

  };

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
      }
    }
  };

  handleMouseScroll = e => {
    const {sections} = this.props;
    const {activeSection} = this.state;

    let newActiveSection = e.deltaY > 0 ? activeSection + 1 : activeSection - 1;
    if (newActiveSection >= sections.length || newActiveSection < 0) return;
    return this.goNext(newActiveSection)
  };


  componentDidMount() {
    window.addEventListener('wheel', this.handleMouseScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleMouseScroll);
  }

  render() {
    const {sections, backgroundColor} = this.props;
    const {activeSection} = this.state;

    const navStyle = {
      position: 'fixed',
      listStyle: 'none',
      margin: 0,
      padding:0,
      zIndex: '10',
      right: '20px',
      top: '50%',
      transform: 'translate(-50%, -50%)'//center css
    };
    const liStyle = {
      flex: 0,
      justifyContent: 'center',
      width: 10,
      height: 10,
      margin: 10,
      borderRadius: '50%',
      backgroundColor: '#fff',
      cursor: 'pointer',
    };
    const sectionWrapperStyle = {
      height: '100vh',
      overflow: 'hidden',
      transform: {translateY: '-100vh'}
    };
    const sectionStyle = {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100%',
      background: '#ccc',
      color: '#fff',
      fontSize: '1em'
    };
    return (
      <div style={sectionWrapperStyle}>

        <ul style={navStyle}>
          {sections.map((item, index) => {
            const style = {...liStyle, backgroundColor: activeSection == index ? 'yellow' : '#fff'};
            return <li key={item} onClick={() => this.goNext(index)} style={style}/>
          })}
        </ul>

        {sections.map((item, index) => {
          const style = backgroundColor.length > 0 ? {
            ...sectionStyle,
            backgroundColor: backgroundColor[index]
          } : sectionStyle;
          return <section
            key={item}
            id={item}
            style={style}
          >
            {this.props.children[index]}
          </section>
        })}

      </div>
    );
  }
}

SectionWrapper.defaultProps = {
  sections: ['section0', 'section1', 'section2', 'section3'],
  backgroundColor: ['#ccc', '#8ac9cc', '#cc7265', '#2ccc8e'] //[]
};
export default SectionWrapper;