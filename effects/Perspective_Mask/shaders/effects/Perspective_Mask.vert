#include "common.h"

uniform mat4 g_ModelViewProjectionMatrix;

attribute vec3 a_Position;
attribute vec2 a_TexCoord;

varying vec2 v_TexCoord;


void main() {
	vec3 position = a_Position;
	v_TexCoord = a_TexCoord;
	
	gl_Position = mul(vec4(position, 1.0), g_ModelViewProjectionMatrix);
}
