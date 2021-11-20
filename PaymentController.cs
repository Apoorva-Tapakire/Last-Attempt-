using BalLibrary;
using DalLibrary;
using ProjectWebApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjectWebApplication.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PaymentController : ApiController
    {

        [HttpPost]
        public IHttpActionResult PaymentAdd(PaymentModel pay)
        {
            PaymentBAL bal = new PaymentBAL();
            bal.CardNo = pay.CardNo;
            bal.BankName = pay.BankName;
            bal.CVVNo = pay.CVVNo;
            bal.IFSCCode = pay.IFSCCode;
            bal.UPINo = pay.UPINo;
            PaymentDAL dal = new PaymentDAL();
            dal.PaymentMethod(bal);
            return Ok(new { status = 200, isSuccess = true, message = "valid user" });
        }
    }
}
