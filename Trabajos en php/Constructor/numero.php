<?php
class numero{
    private $valor;

    public function valor($valor) {
        $this-> valor = $valor; 
        
    }
    public function setValor(): void{
        $this->valor;
        
    }
    public function getValor(): mixed{
        return $this->valor;
    }
}

?>