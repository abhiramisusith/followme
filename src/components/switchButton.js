

import '../assets/css/switchstyle.css'
 


function SwitchButton() {
   
 
  return (
    <div>
  <label className="switch">
    <input type="checkbox"/>
    <span className="slider round"></span>
  </label>
</div>
  );
}

export default SwitchButton;
