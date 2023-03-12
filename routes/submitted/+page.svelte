

<style>

    .parent {
      position: relative;
      top: 0;
      left: 0;
    }
    
    .scrub-bg-img{
      position: relative;
      top: 0;
      left: 0;
      /* border: 1px solid #000000; */
    }
    
    .scrub-bg {
      position: absolute;
      top: 0px;
      left: 0px;
      /* border: 1px solid #000000; */
    }
    
    .range_container {
      display: flex;
      flex-direction: column;
      width: 87%;
      /* margin: 35% auto; */
    }
    
    .sliders_control {
      position: relative;
      min-height: 50px;
    }
    
    .form_control {
      position: relative;
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      color: #635a5a;
    }
    
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      pointer-events: all;
      width: 24px;
      height: 24px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 0 1px #C6C6C6;
      cursor: pointer;
    }
    
    input[type=range]::-moz-range-thumb {
      -webkit-appearance: none;
      pointer-events: all;
      width: 24px;
      height: 24px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 0 1px #C6C6C6;
      cursor: pointer;  
    }
    
    input[type=range]::-webkit-slider-thumb:hover {
      background: #f7f7f7;
    }
    
    input[type=range]::-webkit-slider-thumb:active {
      box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
      -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
    }
    
    input[type="number"] {
      color: #8a8383;
      width: 50px;
      height: 30px;
      font-size: 20px;
      border: none;
    }
    
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button {  
       opacity: 1;
    }
    
    input[type="range"] {
      -webkit-appearance: none; 
      appearance: none;
      height: 2px;
      width: 100%;
      position: absolute;
      background-color: #C6C6C6;
      pointer-events: none;
    }
    
    #fromSlider {
      height: 0;
      z-index: 1;
    }
    .keep span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.keep span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.keep:hover span {
  padding-right: 25px;
}

.keep:hover span:after {
  opacity: 1;
  right: 0;
}
.keep span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.remove span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.remove:hover span {
  padding-right: 25px;
}

.remove:hover span:after {
  opacity: 1;
  right: 0;
}
.remove span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
    
    
    </style>
    <div>
    
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container" style="    display: flex;
          flex-direction: row-reverse;">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="brand" href="https://audiotrimmer.com"><img width="180px" height="44px" src="https://audiotrimmer.com/images/logo.png?v=1" alt="Online Audio Trimmer"/></a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav" style="display: flex;
        flex-direction: row;">
         <li class="active">
        <a href="/">
          Audio Trimmer                <span class="sr-only">(current)</span>
                </a>
      </li>
      <li class="">
        <a href="/online-mp3-converter/">
          Mp3 Converter            </a>
      </li>
      <li class="">
        <a href="/audio-speed-changer/">
          Tempo Changer            </a>
      </li>
      <li class="">
        <a href="/online-mp3-reverser/">
          Audio Reverser            </a>
      </li>
      <li class="">
        <a href="/volume-booster/">
          Volume Booster            </a>
      </li>
      <li class="">
        <a href="/royalty-free-music/">
          Royalty Free Music            </a>
      </li>
      </ul>
             
            </div><!--/.navbar-collapse -->
          </div>
        </nav>
        <h1 style="text-align: center;
        padding: 77px 0px;
        font-size: 52px;">Lorem ipsum dolor.</h1>
    
    
         <!-- Player -->
         <div class="parent">
          <!-- <div></div> -->
          <div class="rangeslider">
          <img class="scrub-bg-img" src="https://audiotrimmer.com/waves/scrubbg.png" style="left:70px;">
      <div class="scrub-bg" style="    height: 140px;
      width: 1170px;
      background-color: #00801a4d; left:70px;"></div>
    
    
    <!-- Slider -->
      <div class="range_container">
        <div class="sliders_control" style="left:70px;">
            <input id="fromSlider" on:click={() => fromvalue()} type="range" value="0" min="0" max="100"/>
            <input id="toSlider" on:click={() => fromvalue()} type="range" value="100" min="0" max="100"/>
        </div>
    </div>
    </div>
    <!-- Slider -->
    
    </div>
        <!-- Player -->
                
      <div class="row" style="width: 93%;">
        <form>
          <div class="col-md-12 text-right">
                  <div class="ctrls">
                       Mode: 
          <!-- <label class="switch"> -->
                   <!-- <input id="mode" name ="mode" class="switch-input" type="checkbox"  checked="checked"/> -->
                   <button class="keep" on:click={()=>gettextkeep()}><span class="keeper">KEEP</span></button> 
                   <button class="remove" on:click={()=>gettextremove()}><span class="remover">REMOVE</span></button> 
                   <!-- <span class="switch-handle"></span>  -->
                  <!-- </label> -->
          </div>
                      
          <div class="ctrls">
          Start: 
                      <div class="btn-group" role="group" aria-label="Start second">
                      <button id="mn-start" type="button" class="btn btn-success str-but">-</button>
                      <input id="begin" value="0.00" class="boxi pull-left" type="text"> 
                      <button id="pl-start" type="button" class="btn btn-success str-but">+</button> 
                      </div>
                  </div>
                  <div class="ctrls">
                  End:
                      <div class="btn-group" role="group" aria-label="End second">
                      <button id="mn-end" type="button" class="btn btn-success end-but">-</button>
                      <input id="end" value={endval} class="boxi pull-left" type="text">
                      <button id="pl-end" type="button" class="btn btn-success end-but">+</button> 
                      </div>
          </div>
                      
        
        
          
          <div class="col-md-4 pull-right">
          <!-- svelte-ignore missing-declaration -->
          <input id="crop-button" value="Crop »" class="btn btn-primary btn-lg pull-right margin-top" on:click={() => audiotrim()} type="button">
          </div>
                  
          <div class="pull-left col-md-6 margin-top fiftypercent">
            <span id="trimming_progress"></span>
              <div id="myprogress2" class="progres" style="display:none;">
                        
                        
              <div id="bar2" class="bar" style="width: 100%;"></div>
              <div id="percent2" class="percent">100%</div>
            </div>
            
          </div>
        <span class="clearfix"></span>
        
        <input id="track_url" name="track_url" value="" type="hidden">
        <input id="track_name" name="track_name" value="" type="hidden">
        <input id="folder" name="folder" value="" type="hidden">
              <input id="duration" name="duration" value="" type="hidden">
        </form>
        </div>
        <p class="margin-top">Click and drag the handles to define the part you want to keep or remove. Fine tune your selection using your keyboard's arrow keys or input boxes above.
        When you are ready, press Crop!</p>
          </div>
    
      <!-- <script lang="ts" src="/node_modules/customised/trim-min-2.js"></script> -->
    <script>
    // @ts-nocheck

    var items="keep";
    var endval;
     function vals() {
            const audio = new Audio("node_modules/new_speed_0.3X.wav");
            // console.log(audio);
            // var slid = document.getElementById("toSlider");
            audio.addEventListener('loadedmetadata', function () {
                // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
                endval = audio.duration;
                console.log(endval)
          // ffmpeg -ss 00:01:00 -i video.mp4 -to 00:02:00 -c copy cut.mp4
            });
            // return endval;
        }
    // vals();
    vals();
    // console.log(valus);
    
      function fromvalue(){
        const audio = new Audio("node_modules/new_speed_0.3X.wav");
            // console.log(audio);
            // var slid = document.getElementById("toSlider");
            audio.addEventListener('loadedmetadata', function () {
                // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
                endval = audio.duration;
                // console.log(endval)
          // ffmpeg -ss 00:01:00 -i video.mp4 -to 00:02:00 -c copy cut.mp4
            
            // return endval;
      var slider = document.getElementById("fromSlider");
      var slid = document.getElementById("toSlider");
      var begin = document.getElementById("begin");
      var end = document.getElementById("end");
      const backgrounds=document.getElementsByClassName("scrub-bg")[0];
      var oldvaluend=end.value*1170/endval;
      if(end.value==100.00){
        oldvaluend=1170;
      }
      // @ts-ignore
      // console.log(backgrounds.style)
      slider.oninput = function() {
      // @ts-ignore
      // begin.value=this.value*1170.00/100;
      // console.log((begin.value*endval)/1170)
      var startvalue=this.value*1170.00/100;
      begin.value=(startvalue*endval)/1170
      // console.log(this.value)
      console.log(this.value*1170.00/100);
      let val=(parseFloat(70)+parseFloat(startvalue)) + "px";
      let oldval=parseFloat(oldvaluend)-parseFloat(startvalue)+"px";
      // console.log(val);
      backgrounds.style.left=val;
      backgrounds.style.width=oldval;
      }
    
      // @ts-ignore
      slid.oninput = function() {
      // @ts-ignore
      
      var endvals=this.value*1170.00/100;
      end.value=(endvals*endval)/1170;
      console.log(end.value);
      // console.log(backgrounds.style.width.replace(/px$/, ''));
      let oldval=(backgrounds.style.width);
      let olds=parseFloat(70)+parseFloat(endvals)-parseFloat(backgrounds.style.left.replace(/px$/, ''))+"px";
      console.log(olds)
      let oldvals=oldval.value;
      // console.log(backgrounds.style.width.replace(/px$/, '')-(oldvaluend-end.value))
      backgrounds.style.width=olds;
      }
    });
    }
    // function filelen(){
    
    // }
    
    
    
    async function audiotrim(){
      var begin = document.getElementById("begin").value;
      var end = document.getElementById("end").value;
      // begin.value
      console.log(items)
      const response = fetch("http://127.0.0.1:8000/destination.wav/"+begin+"/"+end+"/"+items)


    }

    function gettextkeep(){
    const itmtext=document.getElementsByClassName("keep");
    console.log(itmtext)
    // itmtext.style.backgroundColor  = "green";
    // alert("You have selected"+items)
      items="keep";
      alert("You have selected "+items)
    }
    function gettextremove(){
      // var itmtext=document.getElementsByClassName("keeper");
      // var spantext=itmtext.getElementsBy;
      // console.log(itmtext)
      items="remove";
      alert("You have selected "+items)
      // console.log(items)
    }

    
    </script>