import React from 'react';
import { Particle } from './Particle.js';

const Colors = [
  {r:52, g:213, b:72}, //Jobflex green
  {r:0, g:178, b:255}, //blue
  {r:229, g:144, b:255}, //violet
//  {r:52, g:213, b:72}, //Jobflex green
//  {r:0, g:178, b:255}, //blue
//  {r:229, g:144, b:255}, //violet
//  {r:54, g:233, b:84}, //green
//  {r:15, g:200, b:151}, //Jobflex mint
  
]; 


class GradientParticle extends React.Component {
    constructor(props) {
      super(props);
      
      this.canvasRef = React.createRef();
      this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {

      this.canvas = this.canvasRef.current;
      this.ctx = this.canvas.getContext('2d');

      this.pixelRatio = (window.devicePixelRatio > 1 ) ? 2 : 1;

      this.totalParticles = 4;
      this.particles = [];
      this.maxRadius = 900;
      this.minRadius = 700;

      window.addEventListener('resize', this.resize.bind(this), false);
     this.resize();

      window.requestAnimationFrame(this.animate.bind(this));
      console.log(this);
    }
  
    resize(){
      this.stageWidth = this.canvas.clientWidth;
      this.stageHeight = this.canvas.clientHeight;

      this.canvas.width = this.stageWidth * this.pixelRatio;
      this.canvas.height = this.stageHeight * this.pixelRatio;
      this.ctx.scale(this.pixelRatio, this.pixelRatio);
      this.ctx.globalCompositeOperation = 'saturation';

      this.createParticles();
    }

      createParticles() {
        let curColor = 0;
        this.particles = [];

        for(let i = 0; i < this.totalParticles; i++) {
          const item = new Particle (
            Math.random() * this.stageWidth,
            Math.random() * this.stageHeight,
            Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
            Colors[curColor]
          );
          
          if (++curColor >= Colors.length){ 
            curColor = 0;
          }
          this.particles[i] = item;
        }
      }

    animate() {
      window.requestAnimationFrame(this.animate.bind(this));

      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

      for (let i = 0; i < this.totalParticles; i++ ) {
        const item = this.particles[i];
        item.animate (this.ctx, this.stageWidth, this.stageHeight);
      }
    }

    render() {
      return (
        <div style={{position:"absolute", height:'100vh',width:'50%',left:'0'}}>
          <canvas ref = {this.canvasRef}/>
        </div>
      )
    }
} 

export default GradientParticle;