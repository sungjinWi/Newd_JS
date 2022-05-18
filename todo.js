export const createUser = async (req,res) => {
    const {email, password} = req.body;
    console.log("email : ",email,"password: ",password)
    const privatekey = createPrivateKey();
    const publickey = createPublickey(privatekey);
    console.log(publickey);
    try {
        const sql = `INSERT INTO userinfo(email,password,privatekey,address,balance) SELECT ?,?,?,?,0 FROM DUAL WHERE NOT EXISTS (SELECT * FROM userinfo WHERE email = '${email}') ;`
        const [result] = await pool.query(sql,[email,password,privatekey,publickey]);
        console.log(result.affectedRows) //쿼리가 영향 준 row 수
        res.send(result.affectedRows)  //에러가 떠뿐다 왜인지는 모름
    }
    catch (e) {
        throw e;
    }
}