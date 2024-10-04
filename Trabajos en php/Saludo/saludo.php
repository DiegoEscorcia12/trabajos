<?php
class saludo{
    private $saludar;

    public function setsaludar($saludar): void{
        $this->saludar = $saludar;

    }
    public function getsaludar(): mixed{
        return $this->saludar;

    }
}


?>