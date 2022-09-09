AFRAME.registerComponent("car-model",{
    schema:{
        modelRef:{type:"string",default:""},
        clickCounter:{type:"number",default:0}
    },
    init : function(){

        this.el.setAttribute("gltf-model",this.data.modelRef);
        const position={x:0, y:0, z:0}
        const rotation={x:0, y:-9, z:0}
        this.el.setAttribute("position",position);
        this.el.setAttribute("rotation",rotation);
        
    },
    update:function(){
        window.addEventListener("click",e =>{
            this.data.clickCounter=this.data.clickCounter+ 1;
            if(this.data.clickCounter === 1){
                const rotation={x:0,y:20,z:0};
                this.el.setAttribute("rotation", rotation);
                
            }else if(this.data.clickCounter === 2){
                const rotation={x:0,y:100,z:0}
                this.el.setAttribute("rotation", rotation)
            }

            else if(this.data.clickCounter === 3){
                const rotation={x:0,y:180,z:0};
                this.el.setAttribute("rotation", rotation);
                
            }else if(this.data.clickCounter === 4){
                const rotation={x:0,y:260,z:0}
                this.el.setAttribute("rotation", rotation)
            }
            else {
                const rotation={x:0,y:340,z:0};
                this.el.setAttribute("rotation", rotation);
                
            }
        })
    }

    
})