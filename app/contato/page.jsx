import Navegacao from "../Components/Nav"

export default function TelaDeContato(){
    return(
<>

<div className=" bg-blue-400 h-screen flex items-center justify-center">

<div  className="bg-white w-4/5 h-150 rounded-xl p-10 flex-col gap-2">

    <h1 className="font-bold">Entrar em contato</h1>
    <p className=" italic text-slate-600">Caso tenha se interessado nos serviços entrar em contato via email veja abaixo os serviços disponiveis</p>

<ul>
<li> Desenvolvimento web</li>
<li> Desenvolvimento de aplicativo</li>
<li> Especialista em Java</li>


</ul>

<input className="mr-3" type="text" placeholder="Digite seu email" />
<input className="mr-3" type="text" placeholder="Digite sua mensagem " />


<button className="bg-blue-500 border-4   w-28   rounded-xl
   m-3">Enviar</button>


<div className="  bg-blue-300 h-70">

    <Navegacao> </Navegacao>

    <div className="bg-blue-200  flex justify-center h-20">
        <ul className=" flex justify-center gap-10 p-10">

            <li className="">Produto</li>


        </ul>
    </div>

</div>




</div>

<div>
    <img src="" alt="" />
</div>


</div>






</>
    )
}