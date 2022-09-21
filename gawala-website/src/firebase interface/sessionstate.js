export var userid;
export var usermoney;
export var userstocks;
export var usermoneynotfy;

export function setsedata(id,money,sto)
{
    userid=id;
    usermoney=money
    userstocks=sto
    
}

export function setuserstocks(sto)
{
    
    userstocks=sto
    
}
export function setusermoney(mon)
{
    usermoney=mon
    usermoneynotfy(mon)
    
}
export function setusermoneyno(mon)
{
    
    usermoneynotfy=mon
    
}

