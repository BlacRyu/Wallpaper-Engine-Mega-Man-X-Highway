
uniform mat4 g_ModelViewProjectionMatrix;

uniform float u_offset; // {"material":"subpixel offset","default":"0.001","range":[0,1]}

attribute vec3 a_Position;
attribute vec2 a_TexCoord;

// rgb = x coords, a = y coord
varying vec4 v_TexCoord;

void main() {
	gl_Position = mul(vec4(a_Position, 1.0), g_ModelViewProjectionMatrix);
	v_TexCoord.ga = a_TexCoord;
	v_TexCoord.r = a_TexCoord.x + u_offset;
	v_TexCoord.b = a_TexCoord.x - u_offset;
}
