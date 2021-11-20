using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BalLibrary
{
    
        public class PaymentBAL
        {

            public string BankName { get; set; }
            public string IFSCCode { get; set; }
            public string UPINo { get; set; }
            public long CardNo { get; set; }
            public long CVVNo { get; set; }
        }
    }

