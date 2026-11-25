"use client"

export default function Tarefas () {
    return(


    
    
    <>

     <div className="h-100 w-202 bg-gray-300 rounded-md ml-100 flex flex-col gap-4 ring-4 mt-10 " >
    <p className="text-3-1">📄</p>
    <div className="flex gap-4 ">
    <h1 className="text-3-1  gap-3 flex p-2">Minhas Tarefas</h1>



<button className="bg-blue-700 rounded-md w-50 cursor-pointer text-white ">Adicionar</button>
</div>


<div className="flex  gap-5 justify-center gap-20">
 



<button className="cursor-pointer bg-blue-700 rounded-md w-50 text-white">Todas</button>

<button className="cursor-pointer bg-blue-700 rounded-md w-50 text-white">Pendentes</button>

<button className="cursor-pointer bg-blue-700 rounded-md w-50 text-white mr-4">Concluidas</button>

</div>


<div>

<button className="text-3-1  gap-29 flex p-4 flex justify-center mx-auto  "> Limpar concluidas</button>

<div  className="grid grid-cols-3 gap-10">
<div className="bg-white p-2 rounded-lg shandow">
    <input type="text" placeholder=" digite Tarefa de casa" />

</div>
<div className="bg-white  p-2 rounded-lg shandow">
    <input type="text" placeholder="Digite Tarefa do Trabalho" />

</div>
<div className="bg-white p-2  rounded-lg  shandow">
    <input type="text" placeholder="Digite Tarefa da Escola "  />


</div>


</div>




   </div>
</div>


     </>

  );



}; 
   