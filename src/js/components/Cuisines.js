var _ = require('lodash');
var Radium = require('radium');
var PureRender = require('./PureRender');
var {Component, PropTypes, findDOMNode} = require('react');
var withinviewport = require('withinviewport');

@Radium
class Cuisines extends Component {

  state = {
    dropInView: true,
    shakeInView: true,
    wiggleInView: true,
    flipInView: true,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.detectElementInView.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.detectElementInView.bind(this));
  }

  detectElementInView() {
    this.setState({dropInView: withinviewport(findDOMNode(this.refs.drop), {top: -100, bottom: -100})});
    this.setState({shakeInView: withinviewport(findDOMNode(this.refs.shake), {top: -100, bottom: -100})});
    this.setState({wiggleInView: withinviewport(findDOMNode(this.refs.wiggle), {top: -100, bottom: -100})});
    this.setState({flipInView: withinviewport(findDOMNode(this.refs.flip), {top: -100, bottom: -100})});
  }

  render(): any {
    return (
      <div style={styles.root}>
        <section style={styles.cuisine} ref="drop">
          <div style={[styles.elementCircle, this.state.dropInView && styles.theDrop.left]}></div>
          <div style={[styles.elementCircle, this.state.dropInView && styles.theDrop.top]}></div>
          <div style={[styles.elementCircle, this.state.dropInView && styles.theDrop.right]}></div>
        </section>

        <section style={styles.cuisine} ref="shake">
          <div style={[styles.elementCircle, this.state.shakeInView && styles.theShake.hori]}></div>
          <div style={[styles.elementCircle, this.state.shakeInView && styles.theShake.verti]}></div>
          <div style={[styles.elementCircle, this.state.shakeInView && styles.theShake.hori]}></div>
        </section>

        <section style={styles.cuisine} ref="wiggle">
          <div style={[styles.elementSquare, this.state.wiggleInView && styles.theWiggle.wiggling]}></div>
          <div style={[styles.elementSquare, this.state.wiggleInView && styles.theWiggle.wiggling]}></div>
          <div style={[styles.elementSquare, this.state.wiggleInView && styles.theWiggle.wiggling]}></div>
        </section>

        <section style={styles.cuisine} ref="flip">
          <div style={[styles.elementSquare, this.state.flipInView && styles.theFlip.xFlipping]}></div>
          <div style={[styles.elementSquare, this.state.flipInView && styles.theFlip.flipping]}></div>
          <div style={[styles.elementSquare, this.state.flipInView && styles.theFlip.yFlipping]}></div>
        </section>

      </div>
    );
  }
}

var topDrop = Radium.keyframes({
  '0%': {opacity: 0, transform: 'translateY(-800px)'},
  '20%': {opacity: 0},
  '50%': {transform: 'translateY(50px)'},
  '65%': {transform: 'translateY(-30px)'},
  '80%': {transform: 'translateY(10px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'},
});

var leftDrop = Radium.keyframes({
  '0%': {opacity: 0, transform: 'translateX(-800px)'},
  '20%': {opacity: 0},
  '50%': {transform: 'translateX(50px)'},
  '65%': {transform: 'translateX(-30px)'},
  '80%': {transform: 'translateX(10px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
});

var rightDrop = Radium.keyframes({
  '0%': {opacity: 0, transform: 'translateX(800px)'},
  '20%': {opacity: 0},
  '50%': {transform: 'translateX(-50px)'},
  '65%': {transform: 'translateX(30px)'},
  '80%': {transform: 'translateX(-10px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
});

var horiShake = Radium.keyframes({
  '0%, 100%': {transform: 'translateX(0)'},
  '20%, 40%, 60%, 80%': {transform: 'translateX(20px)'},
  '0%, 30%, 50%, 70%, 90%': {transform: 'translateX(-20px)'},
});

var vertiShake = Radium.keyframes({
  '0%, 100%': {transform: 'translateY(0)'},
  '20%, 40%, 60%, 80%': {transform: 'translateY(20px)'},
  '0%, 30%, 50%, 70%, 90%': {transform: 'translateY(-20px)'},
});

var amWiggling = Radium.keyframes({
  '0%': { transform: 'skewX(9deg)' },
  '10%': { transform: 'skewX(-8deg)' },
  '20%': { transform: 'skewX(7deg)' },
  '30%': { transform: 'skewX(-6deg)' },
  '40%': { transform: 'skewX(5deg)' },
  '50%': { transform: 'skewX(-4deg)' },
  '60%': { transform: 'skewX(3deg)' },
  '70%': { transform: 'skewX(-2deg)' },
  '80%': { transform: 'skewX(1deg)' },
  '90%': { transform: 'skewX(0deg)' },
  '100%': { transform: 'skewX(0deg)' },
});

var xFlip = Radium.keyframes({
  '0%': {transform: 'perspective(400px) rotateX(90deg)', opacity: '0'},
  '40%': {transform: 'perspective(400px) rotateX(-10deg)'},
  '70%': {transform: 'perspective(400px) rotateX(10deg)'},
  '100%': {transform: 'perspective(400px) rotateX(0deg)', opacity: '1'},
});

var yFlip = Radium.keyframes({
  '0%': {transform: 'perspective(400px) rotateY(90deg)', opacity: '0'},
  '40%': {transform: 'perspective(400px) rotateY(-10deg)'},
  '70%': {transform: 'perspective(400px) rotateY(10deg)'},
  '100%': {transform: 'perspective(400px) rotateY(0deg)', opacity: '1'},
});

var flip = Radium.keyframes({
  '0%': {transform: 'perspective(400px) rotateY(0)'},
  '40%': {transform: 'perspective(400px) translateZ(150px) rotateY(170deg)'},
  '50%': {transform: 'perspective(400px) translateZ(150px) rotateY(190deg) scale(1)'},
  '80%': {transform: 'perspective(400px) rotateY(360deg) scale(.95)'},
  '100%': {transform: 'perspective(400px) scale(1)'}
})

var styles = {
  root: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
  },

  hrContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },

  cuisine: {
    margin: '20vw 0',
    display: 'flex',

  },

  elementCircle: {
    margin: 'auto',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'green',
  },

  elementSquare: {
    margin: 'auto',
    width: '100px',
    height: '100px',
    background: 'green',
  },

  theDrop: {
    top: {
      animation: topDrop  + ' 1.5s 1 ease-out',
    },

    left: {
      animation: leftDrop  + ' 1.5s 1 ease-out',
    },

    right: {
      animation: rightDrop  + ' 1.5s 1 ease-out',
    }
  },

  theShake: {
    verti: {
      animation: vertiShake  + ' 1.5s 1 ease-out',
    },

    hori: {
      animation: horiShake  + ' 1.5s 1 ease-out',
    }
  },

  theWiggle: {
    wiggling: {
      animation: amWiggling + ' 1.5s 1 ease-out',
    }
  },

  theFlip: {
    flipping: {
      animation: flip + ' 1.5s 1 ease-out',
    },

    xFlipping: {
      animation: xFlip + ' 1.5s 1 ease-out',
    },

    yFlipping: {
      animation: yFlip + ' 1.5s 1 ease-out',
    }
  },
}

module.exports = Cuisines;
