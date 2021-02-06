﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MathEvent.Entities.Models.Event
{
    public class Event
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        #region hierarchy
        public bool? Hierarchy { get; set; }

        [ForeignKey("Event")]
        public int? ParentId { get; set; }

        public Event Parent { get; set; }
        #endregion

        [MaxLength(500)]
        public string Description { get; set; }
    }
}
