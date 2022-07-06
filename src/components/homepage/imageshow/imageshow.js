import React, { Component } from 'react';
import './imageshow.css'
import image11 from '../../../images/image11.jpg';
import image12 from '../../../images/image12.jpg';
import image13 from '../../../images/image13.jpg';


import familyactivity from '../../../images/familyactivity.png';
import {Link} from 'react-router-dom';

export class ImageShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            direction: '',
            interval:true,
       

        }
        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
      
    }

    componentDidMount() {

       

            let myInterval=setInterval(() => {

            
            if (this.state.position === 1) {
                this.setState({
                    position: 3,
                    direction: 'left'

                })
                return
            }
            this.setState({
                position: this.state.position - 1,
                direction: 'left'

            })},6000
        );
        this.setState({
            myInterval:myInterval
        })
    
    }

    componentWillUnmount (){
        clearInterval(this.state.myInterval)
    }

  


    handleClickPlus(event) {

                const cal = () => {
                    if (this.state.position === 3) {
                        return 1;
                    }
                    return this.state.position + 1;
                }


        this.setState({

                    position: cal(),
                    direction: "right",
                });
                if (this.state.myInterval){
                    clearInterval(this.state.myInterval)
                }

            }

    handleClickMinus(event) {
                const cal = () => {
                    if (this.state.position === 1) {
                        return 3;
                    }
                    return this.state.position - 1
                }
        this.setState({
                    position: cal(),
                    direction: "left",
                    interval:false,

                });
                if (this.state.myInterval){
                    clearInterval(this.state.myInterval)
                }
                

     
            }

   imageNumber (){
                if (this.state.position===1){
                    return 1;
                }
                if (this.state.position===3){
                    return 2;
                }
                if (this.state.position===2){
                    return 3;
                }
    
            }

    render() {


                let styleimage1 = {};

                let styleimage2 = {};
                let styleimage3 = {};
                let styleimage5 = {};



                if(this.state.position === 2 && this.state.direction === "right") {
            styleimage1 = {
                left: "0%",
                transform: 'translate(100%)',
                transition: '.6s ease'
            }

            styleimage2 = {
                left: "-100%",
                transform: 'translate(100%)',
                transition: '.6s ease'
            }



        }

        if (this.state.position === 3 && this.state.direction === "right") {

            styleimage1 = {
                left: "500%",
            }

            styleimage2 = {
                left: "0%",
                transform: 'translate(100%)',
                transition: '.6s ease'
            }

            styleimage3 = {
                left: "-100%",
                transform: 'translate(100%)',
                transition: 'transform .6s ease'
            }



        }

        if (this.state.position === 1 && this.state.direction === "right") {

            styleimage1 = {
                left: '-100%',

                transform: 'translate(100%)',
                transition: 'transform .6s ease'

            }

            styleimage3 = {
                left: "0%",
                transform: 'translate(100%)',
                transition: ' .6s ease'
            }

        }





        if (this.state.position === 3 && this.state.direction === "left") {

            styleimage1 = {
                left: '0%',
                transform: 'translate(-100%)',
                transition: '.6s ease'

            }

            styleimage3 = {
                left: '100%',
                transform: 'translate(-100%)',
                transition: 'transform .6s ease'

            }
        }


        if (this.state.position === 2 && this.state.direction === "left") {

            styleimage3 = {
                left: '0%',
                transform: 'translate(-100%)',
                transition: '.6s ease'

            }

            styleimage2 = {
                left: '100%',
                transform: 'translate(-100%)',
                transition: 'transform .6s ease'

            }
            styleimage1 = {
                left: '500%',


            }
        }


        if (this.state.position === 1 && this.state.direction === "left") {

            styleimage1 = {
                left: '100%',
                transform: 'translate(-100%)',
                transition: 'transform .6s ease'

            }

            styleimage2 = {
                left: '0%',
                transform: 'translate(-100%)',
                transition: '.6s ease'

            }

        }

 


        return (
            <div className="imageshow-container">

                <div className="imageshow-left-container">

                   <Link to='/products/productsdetails/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5NDkwMTM3NzAzNg=='>


                    <div className='imageshow-left imageshow-left-01' style={styleimage1}>

                        <div className="info">
                            <p className="info-title">6pcs Wooden Puppet Toys Cartoon Family Dolls for Children Play House Gift</p>
                            
                        </div>
                        <div className="leftimage-container">
                            <img src={image11} alt='product images'/>
                        </div>
                       

                    </div>
                    </Link>

                    <Link to='/products/productsdetails/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5NDkwMTQ0MjU3Mg=='>

                    <div className='imageshow-left imageshow-left-02' style={styleimage2}>

                        <div className="info">
                        <div>
                        
                         
                            <p className="info-title">Hot Sale Family Mommy And Me Women Short Cami Top</p>
                          
                        </div>
                       
                            
                        </div>
                       
                       
                        <div className="leftimage-container">
                                  <img src={image12} alt='product images'/>
                           
                        </div>
                        
                    </div>

                    </Link>

                    <Link to='/products/productsdetails/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5NDkwMTgwMzAyMA=='>

                    <div className='imageshow-left imageshow-left-03' style={styleimage3}>

                        <div className="info">
                            <p className="info-title">Matching Skeleton Family Outfits - Halloween Christmas</p>
                            
                        </div>
                        <div className="leftimage-container">
                            <img src={image13} alt='product images'/>
                        </div>

                       
                      

                    </div>
                    </Link>

                    <a className="prev" name="left" onClick={this.handleClickPlus}>&#10094;</a>
                    <a className="next" name="right" onClick={this.handleClickMinus}>&#10095;</a>

                    
                    <div className='imagenumber'>{this.imageNumber()} / 3</div>

                    <div style={{display:'none'}} className="spotshow">
                    
                        <span className={this.state.position === 3 ? 'active' : ''}>3</span>
                        <span title='spot2' className={this.state.position === 2 ? 'active' : ''}>2</span>
                        <span title='spot3' className={this.state.position === 1 ? 'active' : ''}>1</span>

                    </div>
                </div>

                <div className="imageshow-right-container">
                    
                    <div className="event"><Link to='/events/list'>
                        <img src={familyactivity} alt='family activities'/></Link>
                    </div >
                    <div><Link to='/events/list'><p style={styleimage5} className="joinbtn" > Join our fantastic FamilyFun events!</p></Link></div>
                </div>

            </div>
        )

    }




}
