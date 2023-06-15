var current=document.querySelectorAll('.current');
var next=document.querySelectorAll('.next');
var input_taking=document.getElementById('input-taking');
var buttons=document.getElementById('buttons');


function startCounter()
{
    var curr=1;
    var finish_time=parseInt(input_taking.value);

    if(finish_time<0 || finish_time>99999)
    {

        window.alert('set right counter!!');
        return;
    }


    var interval=setInterval(function()
    {
        if(curr>finish_time)
        {
            window.alert("time up");
            reset(current,next,4);            
            clearInterval(interval);
            curr=0;
            return;
        }

        increaseCounter(current,next,4);
        curr++;
    },1000);
}

function reset(current,next,end)
{
    for(var i=0;i<=end;i++)
    {
        current[i].innerText=0;
        next[i].innerText=1;

    }

}

function increaseCounter(current,next,end)
{
    let current_end=current[end];
    let next_end=next[end];

    if(current_end.innerText==9)
    {
        increaseCounter(current,next,end-1);
    }

    next_end.classList.add('animate');
    
    setTimeout(function()
    {
        current_end.innerText=next_end.innerText;
        next_end.classList.remove('animate');

        next_end.innerText=parseInt(next_end.innerText)+1;
        if(next_end.innerText>9)
            next_end.innerText=0;
    },500);
}