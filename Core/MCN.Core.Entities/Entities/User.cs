using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MCN.Core.Entities.Entities
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public Double Latitude { get; set; }
        public Double Longitude { get; set; }
        public bool IsEmailVerified { get; set; }
        public bool? IsActive { get; set; }
        public int LoginFailureCount { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public int? UpdatedBy { get; set; }
        public int? UserLoginTypeId { get; set; }
        // May Add Multiple Locations- Only allow 2 Locations for one person
        public List<Location> Locations { get; set; }
        // Only allow 10 Skills per person 
        public List<UserInterest> Interests { get; set; }
    }


    [Table(nameof(UserInterest), Schema = nameof(Schemas.Account))]
    public class UserInterest
    {
        public int InterestId { get; set; }
        public int UserId { get; set; }
    
    }


    [Table(nameof(Location), Schema = nameof(Schemas.Account))]
    public class Location
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Address { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public int UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
    }


    [Table(nameof(Interest), Schema = nameof(Schemas.Account))]
    public class Interest
    { 
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public bool Paid { get; set; }
        public string Description { get; set; }
        public double Cost { get; set; }
        public string Type { get; set; }
    }

}


/*
Category
- Occupation
- Interest


SubCategory
 
 */