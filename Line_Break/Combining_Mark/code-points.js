module.exports=JSON.parse(require('zlib').gunzipSync(Buffer([31,139,8,0,0,0,0,0,0,3,45,154,81,182,237,40,8,68,39,116,62,162,168,192,88,222,234,249,79,163,217,85,247,227,148,253,18,138,40,84,20,114,251,223,247,91,191,253,139,223,249,221,223,251,229,175,126,235,252,214,253,173,247,91,249,91,243,207,254,237,239,183,199,106,255,118,252,246,249,237,251,219,239,183,243,183,235,183,251,23,223,47,214,111,205,191,215,92,88,115,101,205,165,197,181,216,243,27,119,49,254,98,28,198,216,196,216,196,216,156,177,57,99,115,198,230,196,252,198,238,140,221,25,187,51,118,135,153,140,221,29,187,59,118,119,236,238,216,93,166,55,118,119,236,238,216,221,177,187,253,203,87,243,155,49,191,249,173,249,237,249,197,252,206,252,238,252,102,117,153,243,27,187,28,187,26,187,26,187,26,187,26,187,26,187,26,187,26,187,26,187,26,187,26,187,30,187,30,187,30,187,30,187,30,187,30,187,30,187,30,187,30,187,238,95,125,223,252,214,252,246,252,98,126,103,126,119,126,111,126,19,215,175,230,55,118,107,236,214,216,173,177,91,99,55,225,174,137,119,77,192,107,34,94,19,242,154,152,215,4,189,38,234,53,97,175,137,123,77,224,107,34,95,19,250,154,88,215,196,186,38,214,53,177,174,137,117,77,172,43,198,110,226,93,19,239,154,120,215,196,187,38,222,53,241,174,137,119,77,188,107,226,93,19,239,154,120,215,196,187,38,222,53,177,174,137,117,77,172,107,98,93,19,235,154,88,215,196,186,38,214,53,177,174,137,117,77,172,107,98,93,111,254,123,226,93,19,239,154,120,215,196,187,38,222,53,241,174,137,119,77,188,107,226,93,19,239,154,120,215,196,123,41,105,202,154,210,166,188,145,184,181,222,7,72,10,228,127,35,0,212,116,144,211,65,79,7,65,29,20,117,66,114,65,47,8,235,160,172,131,180,14,218,58,136,235,72,93,146,151,244,37,129,89,97,48,164,49,137,76,42,147,204,208,217,65,104,7,165,29,164,118,208,218,185,18,37,12,38,126,152,248,97,226,135,137,31,38,126,52,241,7,227,193,120,48,158,116,12,227,193,120,48,30,140,196,56,177,75,236,82,90,199,132,8,93,73,92,26,183,200,81,185,100,46,157,75,232,60,247,242,220,203,115,47,207,189,60,242,141,164,6,54,16,128,174,241,26,243,34,63,94,229,199,203,252,70,90,235,141,182,6,96,108,24,27,198,134,65,2,30,9,120,36,224,145,128,71,2,30,9,120,36,224,17,176,36,86,73,172,146,57,39,115,78,230,156,204,57,153,115,50,211,100,166,201,76,147,153,38,17,74,166,155,196,133,87,118,241,190,46,94,216,197,27,187,120,101,23,239,201,66,176,11,197,46,36,187,208,236,66,180,11,213,46,100,59,192,14,197,132,80,239,66,190,11,253,46,4,188,80,240,66,194,11,13,47,68,188,80,241,66,198,11,29,175,98,126,197,252,138,249,21,243,43,230,87,100,176,200,96,99,220,24,55,198,141,113,99,220,24,55,198,141,113,203,152,101,245,44,107,127,108,143,223,214,127,177,129,78,252,6,22,176,129,0,14,48,155,233,151,220,77,238,38,119,147,187,169,27,15,192,85,226,42,113,85,24,23,198,133,113,97,92,24,23,198,133,113,97,215,216,53,118,141,221,236,93,155,13,120,179,3,111,182,224,189,103,69,3,108,237,179,162,129,0,14,112,129,7,36,80,0,12,102,186,153,233,102,166,155,153,110,102,186,153,233,102,166,155,153,110,102,186,153,233,102,166,155,153,110,102,186,11,247,76,119,51,221,205,116,119,193,96,206,155,57,111,230,188,153,243,102,206,187,97,52,140,134,209,48,26,198,236,186,59,102,219,29,88,0,231,211,236,188,3,7,184,192,3,134,17,44,48,88,96,176,192,96,109,241,116,163,0,92,177,182,96,109,193,218,130,181,69,98,204,2,131,5,6,11,12,22,24,44,48,88,96,176,192,96,129,193,2,131,181,5,107,11,214,22,172,45,88,91,176,182,96,109,135,153,30,102,202,70,182,217,200,54,27,217,62,44,250,176,222,211,250,231,3,18,40,96,188,92,214,123,225,94,86,121,89,219,157,163,101,128,187,28,214,23,173,93,180,198,30,177,217,35,6,134,193,107,191,121,227,55,111,252,230,141,223,79,135,57,199,57,111,247,0,119,153,203,11,93,27,247,239,112,131,144,60,66,242,136,193,99,69,143,21,61,86,148,243,14,110,54,133,205,166,176,217,20,54,155,194,102,83,216,108,10,155,77,97,32,129,225,178,51,108,118,134,205,166,176,217,20,6,176,35,116,28,192,155,211,112,115,28,110,206,195,205,129,178,57,77,54,199,201,104,230,3,22,176,129,0,14,0,141,176,23,83,43,98,90,8,169,9,123,19,186,158,221,113,96,158,214,179,141,140,132,4,9,20,64,77,51,199,244,192,1,46,128,201,226,238,226,238,230,238,108,160,193,59,29,188,181,193,91,59,0,99,244,18,212,61,65,225,19,84,62,193,155,23,188,121,193,155,23,84,63,65,233,19,212,62,65,241,19,84,62,65,233,19,212,62,65,241,19,28,149,193,81,25,43,97,140,58,99,127,130,13,12,151,151,56,120,127,131,247,55,120,127,131,247,55,120,127,131,247,55,120,127,131,87,55,182,28,48,221,205,76,121,117,131,87,55,120,117,131,247,50,120,47,131,23,44,120,193,34,168,240,130,26,47,88,42,42,14,84,60,176,129,0,14,112,129,7,20,48,180,51,98,13,212,30,168,125,224,0,99,119,136,41,7,125,112,208,7,71,106,112,164,6,218,29,184,192,3,18,40,128,187,68,237,18,181,75,192,238,193,142,168,93,162,118,137,218,37,106,247,98,55,74,140,203,162,47,139,102,91,15,182,245,64,12,3,250,175,161,33,139,64,22,179,2,193,1,46,240,0,76,152,31,103,64,112,6,4,103,64,112,6,4,103,64,112,6,4,103,64,112,6,4,219,255,0,198,60,188,121,120,19,241,38,226,77,196,187,184,86,92,43,28,20,55,74,55,112,80,60,178,240,82,120,33,226,77,196,155,137,55,193,110,102,223,4,187,181,4,34,222,19,241,9,248,7,44,96,3,1,28,224,2,15,72,160,0,24,11,198,130,177,96,44,24,11,198,130,177,96,44,24,11,198,130,177,97,108,24,27,198,134,177,97,108,24,27,198,134,177,97,76,242,14,65,60,4,241,16,196,219,51,141,129,4,106,32,4,220,152,252,94,162,118,137,218,99,9,143,37,60,106,199,71,237,248,120,33,30,98,125,156,51,179,103,205,93,106,194,199,86,250,216,74,31,91,233,163,38,124,212,132,143,154,240,81,19,62,106,194,71,77,248,168,9,31,53,225,163,254,123,212,127,143,250,239,81,255,61,234,191,71,253,247,168,255,30,245,223,163,254,123,212,127,15,177,62,196,250,94,2,179,15,13,44,96,3,67,163,159,120,20,228,143,138,252,81,146,63,106,242,71,81,254,168,202,31,101,249,163,46,127,212,57,143,58,231,81,231,60,234,156,71,157,243,168,115,30,117,206,108,177,27,8,224,0,23,224,198,227,159,143,127,62,253,51,129,2,198,51,145,124,138,36,250,27,192,65,194,72,24,9,131,72,54,145,108,22,211,52,69,36,57,73,114,146,228,36,201,73,146,147,36,39,73,78,146,156,36,57,191,131,221,193,238,96,71,199,197,38,152,108,130,73,253,146,212,47,73,253,146,212,47,249,233,25,116,94,212,47,73,253,50,0,131,238,139,61,49,217,19,147,61,49,233,8,147,141,49,217,24,147,141,49,217,24,147,182,48,233,11,147,198,48,233,12,147,214,48,145,74,238,145,252,128,254,235,1,9,20,48,220,61,146,31,88,192,6,2,128,177,96,44,24,11,198,130,65,52,54,209,216,68,99,19,141,77,52,40,8,146,130,32,41,8,146,90,32,169,5,146,90,32,169,5,6,14,112,1,140,105,43,41,8,146,130,32,217,74,147,173,52,217,74,147,173,52,217,74,147,173,52,217,74,7,96,208,97,178,159,38,251,105,178,129,230,97,9,135,37,28,150,112,152,243,97,206,148,251,249,252,95,52,196,204,158,115,63,41,247,147,195,63,57,252,147,195,63,57,252,147,195,63,41,247,147,114,63,41,247,147,114,63,41,8,146,130,96,0,70,192,8,24,1,35,96,4,140,128,129,14,168,20,6,96,144,193,71,6,31,25,124,100,240,145,65,218,135,1,24,100,240,145,193,71,6,31,25,124,100,240,145,193,119,97,92,24,23,134,58,252,7,227,193,120,48,30,140,7,227,193,120,48,30,12,125,10,224,91,192,67,132,143,68,81,181,12,112,35,213,92,211,77,211,154,163,141,233,175,249,39,93,243,166,109,222,161,107,106,176,185,209,220,104,110,52,55,90,55,212,122,211,123,211,244,83,124,22,197,103,145,163,1,26,109,174,29,95,163,215,230,99,192,225,145,135,71,30,190,7,28,62,8,144,203,34,151,69,46,7,96,240,85,128,83,178,72,109,145,218,1,24,124,26,56,124,27,56,91,205,60,12,62,15,28,190,15,208,64,23,231,106,113,174,22,13,116,209,64,23,13,116,209,64,151,26,232,69,5,9,30,33,141,57,217,89,43,105,176,6,175,240,9,125,189,132,180,235,106,254,220,253,185,253,115,255,231,6,208,29,160,91,192,149,106,244,83,157,190,250,65,55,132,238,8,221,18,186,39,116,83,184,40,0,65,113,159,184,79,220,39,110,138,155,226,166,184,41,110,138,59,169,94,155,66,5,92,194,45,12,225,17,202,134,158,114,159,63,156,19,108,42,168,20,150,176,65,78,197,77,63,13,134,240,8,175,240,9,197,90,98,45,177,182,88,28,141,27,41,131,216,103,60,225,216,171,176,60,170,44,143,106,201,193,121,87,64,93,153,200,131,79,136,61,213,227,81,249,56,56,123,7,8,107,245,39,92,194,45,12,225,17,94,161,184,45,110,139,75,145,48,117,227,39,92,194,45,12,225,17,194,221,161,235,161,235,161,235,225,235,79,152,194,18,202,231,145,207,35,159,71,92,173,107,107,93,91,235,218,90,215,214,186,246,17,247,192,13,205,33,52,135,208,28,66,115,160,125,3,83,88,66,217,107,38,161,153,132,102,18,154,73,104,38,161,153,132,102,18,154,73,104,38,161,153,132,102,18,154,73,104,38,161,232,133,162,23,138,94,40,122,71,172,35,214,57,190,242,132,41,44,33,79,164,116,0,151,112,11,197,189,226,94,113,47,92,58,50,112,11,67,120,132,87,104,155,20,150,16,255,84,177,71,101,44,40,110,138,155,226,150,236,149,235,171,92,167,158,152,122,34,239,32,88,66,188,165,158,197,91,118,92,32,186,66,116,137,232,26,209,69,162,171,68,151,137,174,19,93,35,170,72,156,109,126,206,180,217,196,103,223,1,175,208,87,82,88,194,6,231,173,4,151,112,11,67,40,110,136,27,226,134,184,33,110,136,123,117,253,234,250,213,245,171,235,79,62,159,124,62,249,124,242,249,228,243,201,231,19,247,137,251,196,125,226,166,184,84,70,247,106,134,87,51,164,105,158,67,134,186,235,209,36,205,225,178,141,33,60,194,43,164,144,251,58,133,37,164,150,91,223,18,110,97,9,117,125,125,66,221,189,186,75,125,89,148,44,96,171,94,84,133,184,85,200,17,165,230,220,5,85,228,149,202,186,106,21,119,159,112,9,101,217,178,108,89,182,234,193,150,159,86,69,216,46,9,93,19,170,40,252,84,21,126,42,11,175,174,63,93,127,186,78,60,155,47,214,160,234,66,230,223,124,183,6,117,87,229,104,169,30,45,21,164,165,138,148,174,29,20,183,140,242,160,57,55,218,24,44,33,215,59,116,157,200,15,110,97,8,143,240,10,159,80,220,16,55,196,85,241,137,134,7,41,124,62,90,21,144,98,147,188,131,254,111,42,79,242,14,46,225,22,138,171,130,213,21,171,75,86,215,172,46,90,93,181,186,108,229,163,26,40,15,84,109,31,123,50,216,42,156,93,62,47,161,238,82,212,125,236,201,224,21,62,97,10,197,109,215,219,92,15,205,57,52,231,208,156,67,115,14,205,57,52,231,208,156,67,115,14,205,89,165,232,167,90,244,83,49,250,169,82,252,40,67,192,45,132,197,39,107,80,87,158,175,28,225,21,62,161,234,122,205,225,232,185,71,207,61,122,214,209,179,142,158,117,74,168,85,28,173,226,234,89,87,207,162,186,0,175,240,9,83,136,253,93,178,92,178,92,178,92,178,84,30,147,58,125,18,245,9,151,80,237,133,236,83,246,41,251,180,189,242,158,202,123,170,127,73,53,48,169,14,38,213,194,164,122,152,84,19,147,234,98,82,109,12,141,26,168,62,36,212,136,80,229,126,52,107,96,10,75,168,254,69,170,43,245,60,165,166,135,158,13,20,247,136,123,196,61,226,30,113,143,184,87,92,245,45,124,170,5,75,72,79,35,117,45,169,107,73,93,139,175,182,224,19,202,190,101,79,180,103,83,249,132,75,184,133,33,164,17,226,175,111,32,87,212,212,44,117,53,75,109,205,82,95,179,212,216,44,117,54,75,173,205,82,111,51,120,132,87,40,238,22,119,139,187,197,13,113,67,92,61,139,243,119,144,248,44,206,95,80,215,213,207,133,26,186,80,71,23,106,233,66,61,93,168,169,11,117,117,161,182,46,136,143,62,37,166,190,37,166,62,38,166,190,38,166,62,39,166,190,39,166,62,40,130,52,106,236,96,169,111,138,160,88,79,172,39,214,19,235,137,133,194,183,114,177,149,139,93,122,74,233,41,165,167,148,158,82,122,74,93,219,151,144,126,176,244,172,210,179,74,207,42,61,171,244,172,210,179,74,207,42,63,235,137,251,196,77,113,83,220,20,43,197,74,177,82,172,20,43,197,74,177,74,172,18,171,244,196,18,183,196,45,113,231,68,158,93,117,222,20,48,132,71,120,133,186,155,198,20,150,176,193,241,15,46,225,120,56,156,209,224,17,94,225,19,166,176,132,13,78,198,193,37,20,247,136,123,196,61,226,30,113,143,184,71,220,35,238,21,247,138,123,197,189,226,94,113,175,184,87,220,43,238,21,247,138,251,196,125,226,62,113,159,184,79,220,39,238,19,247,137,251,196,125,226,166,184,41,110,138,155,226,166,184,41,110,138,155,226,166,184,173,235,173,235,173,235,77,135,18,252,169,86,195,246,112,60,92,15,207,3,29,77,235,143,222,12,219,67,120,56,30,174,135,214,160,70,171,245,215,111,6,19,174,9,215,132,107,130,218,173,246,31,86,219,127,90,109,255,113,181,253,231,213,214,31,88,25,236,229,217,203,179,151,103,47,207,94,158,189,60,123,121,246,146,246,146,230,165,121,105,94,154,151,230,165,121,250,155,111,243,173,69,195,242,176,61,200,75,120,46,241,254,254,69,139,166,93,66,195,245,240,60,164,135,242,208,26,8,207,214,102,161,97,123,8,15,246,114,237,229,218,203,181,151,107,47,215,94,158,189,60,123,121,246,242,236,229,111,74,207,94,158,189,60,123,121,246,242,236,37,237,37,237,37,237,37,237,37,237,37,237,37,237,37,237,37,237,37,237,165,236,165,236,165,236,165,236,165,236,165,236,165,236,165,236,165,236,165,236,165,237,165,237,165,237,165,237,165,237,165,237,165,237,165,237,165,229,133,66,65,195,241,112,61,60,15,233,225,207,82,207,227,251,133,134,229,97,123,176,151,101,47,203,94,150,189,44,123,89,246,178,236,101,219,203,182,151,109,47,219,94,182,189,108,123,217,246,178,237,101,219,203,182,151,176,151,176,151,176,151,176,151,176,151,176,151,176,151,176,151,176,151,176,151,99,47,199,94,142,189,28,123,177,62,143,245,121,172,207,99,125,30,235,243,88,159,199,250,60,214,231,177,62,143,117,118,172,2,138,166,25,248,163,158,134,229,97,123,8,15,215,195,243,144,30,202,131,233,78,192,117,2,174,19,112,157,128,235,4,92,39,224,58,1,215,9,184,78,192,85,2,116,192,104,88,30,182,135,240,112,60,92,15,207,67,121,48,189,77,111,211,219,244,54,189,77,111,211,219,116,169,110,6,123,81,36,118,43,18,51,44,15,219,67,120,56,30,210,67,121,48,111,153,183,204,91,230,45,243,180,118,29,127,26,204,243,162,123,155,183,205,147,234,174,254,87,37,134,244,80,30,90,131,164,113,181,137,51,136,176,239,223,16,30,142,135,235,225,121,72,15,115,138,240,5,237,106,224,60,101,72,15,190,199,145,202,199,180,207,195,242,176,61,132,135,227,193,94,142,189,28,123,57,246,114,236,229,218,203,181,151,107,47,215,94,174,189,92,123,185,246,114,237,229,111,158,215,94,158,189,60,123,121,246,242,236,229,217,203,179,151,103,47,207,94,158,189,60,123,73,123,73,123,73,123,73,123,73,123,73,123,73,123,73,123,73,123,73,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,105,123,105,123,105,123,105,123,105,123,105,123,105,123,105,123,105,123,105,121,121,223,231,97,121,216,30,194,195,241,112,61,60,15,233,161,60,216,203,178,151,101,47,203,94,150,189,44,123,89,246,178,236,101,217,203,178,151,101,47,219,94,182,189,108,123,217,246,178,237,101,219,203,182,151,109,47,219,94,182,189,132,189,132,188,164,243,158,239,239,95,219,67,120,56,30,174,135,231,33,61,148,7,249,76,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,116,222,211,121,79,231,61,157,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,247,114,222,203,121,47,231,189,156,119,58,98,13,246,18,246,18,246,226,61,171,188,103,149,247,172,242,158,85,222,179,202,123,86,121,207,42,239,89,229,61,171,188,103,149,247,172,242,158,85,222,179,202,123,86,121,207,42,239,89,229,61,171,188,103,149,247,172,242,158,85,222,179,202,123,86,121,207,42,239,89,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,101,237,150,181,91,214,110,89,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,91,187,109,237,182,181,219,214,110,119,255,247,63,145,37,35,196,170,46,0,0])))