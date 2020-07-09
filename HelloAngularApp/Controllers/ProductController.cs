using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelloAngularApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace HelloAngularApp.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : Controller
    {
        private readonly ApplicationContext _db;
        public ProductController(ApplicationContext context)
        {
            _db = context;
            if (!_db.Products.Any())
            {
                _db.Products.Add(new Product { Name = "iPhone X", Company = "Apple", Price = 79900 });
                _db.Products.Add(new Product { Name = "Galaxy S8", Company = "Samsung", Price = 49900 });
                _db.Products.Add(new Product { Name = "Pixel 2", Company = "Google", Price = 52900 });
                _db.SaveChanges();
            }
        }
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _db.Products.ToList();
        }

        [HttpGet("{id}")]
        public Product Get(int id)
        {
            Product product = _db.Products.FirstOrDefault(x => x.Id == id);
            return product;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Product product)
        {
            if (ModelState.IsValid)
            {
                _db.Products.Add(product);
                await _db.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public  async Task<IActionResult> Put(Product product)
        {
            if (ModelState.IsValid)
            {
                _db.Update(product);
                await _db.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            Product product = _db.Products.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                _db.Products.Remove(product);
               await  _db.SaveChangesAsync();
            }
            return Ok(product);
        }
    }
}