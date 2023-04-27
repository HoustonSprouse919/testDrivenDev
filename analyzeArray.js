function analyzeArray(array) {
    function average(){
        let total =0;
        for(let i =0; i<array.length; i++){
            total+=array[i];
        }
        return (total / array.length);
    }
    function min(){
        let min = array[0];
        for(let i =0; i<array.length; i++){
            if(array[i] < min){
                min=array[i];
            }
        }
        return min;
    }
    function max(){
        let max = array[0];
        for(let i =0; i<array.length; i++){
            if(array[i] > max){
                max=array[i];
            }
        }
        return max;
    }
function length(){
    return array.length
}
    return{
        average:average(),
        min:min(),
        max:max(),
        length:length()
    }
  }
  module.exports = analyzeArray;