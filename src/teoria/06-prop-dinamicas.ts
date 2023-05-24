const objUsuario:Record<string, string > = {
    ["hoal-todos"]:"felipe"
}

const usuarios = ["gabriel" , "admer", "fernando"]

usuarios.forEach((usuario, index) => objUsuario[`id_${index}`] = usuario )

console.log(objUsuario);