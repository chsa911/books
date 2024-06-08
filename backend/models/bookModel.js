import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
//Lesehistorie Eingabedatum
    eindat: {
      type: Date,
      required: true,
    },
//Lesehistorie Entdeckung
    entdat: {
      type: Date,
      required: true,
    },
//Lesehistorie Veröffentlichung
    verdat: {
      type: Date,
      required: true,
    },
//Lesehistorie Beendigung
    enddat: {
      type: Date,
      required: true,
    },
    // Mindestangaben
    autor: {
      type: String,
      required: true,
    },
    keyw: {
      type: Number,
      required: true,
    },
  kwp: {
        type: Number,
        required: true,
      },
   verl: {
          type: String,
          required: true,
        },
      seit: {
        type: Number,
        required: true,
      },
// Wie oft wurde das Buch gelesen 0= erstes mal 1= 2. mal
     lesevs: {
        type: Number,
        required: false,
      },
    //Teil: Content
    //Genre
//F= Fiktion, N=Nonfiktion
      genre: {
                type: String,
                required: false,
                             },
      gengen: {
                  type: String,
                  required: false,
                               },
    //Handlungsort:
    // 0-9
       kont: {
                    type: Number,
                    required: false,

                  },
         land: {
                        type: String,
                        required: false,
                      },
         them0: {
                         type: String,
                         required: false,

                              },
         them1: {
                         type: String,
                         required: false,
                                       },
        them2: {
                                               type: String,
                                               required: false,
                                             },
         hauper0: {
                            type: String,
                            required: false,
                                          },
           hauper1: {
                                                  type: String,
                                                  required: false,
                                                },
   zeit: {
                                               type: String,
                                               required: false,

                                             },
    // Amazon Link
    amalin: {
                                               type: String,
                                               required: false,
    },
  // Position der Markierung: oben, unten, rechts, links
    pos: {
                                               type: String,
                                               required: false,
                                                                                            },
    //Teil Markierungen
    // Markierung inkl Farbwert
    mark: {
                                                   type: String,
                                                   required: false,

                                                 },
    // Rang der Markierung
    markrang: {
                                                   type: String,
                                                   required: false,

    },
    //Topwert in jedem Bereich
   topw: {
                                                   type: Number,
                                                   required: false,

                                                 },
    //Belegte Bereiche
    belber: {
                                                   type: Number,
                                                   required: false,

                                                 },
    //Gesamtwert aller Bereiche
    gesw: {
                                                   type: Number,
                                                   required: false,

                                                 },
    //Zustand Markierung: x= verfügbar, v=vorzeitig beendet, w= wunsch
    zust: {
                                                   type: String,
                                                   required: false,

                                                 },
},
  {
    timestamps: true,
  }
);
/*
{



{
  timestamps: true,
}
);
*/
export const Book = mongoose.model('Book', bookSchema);
