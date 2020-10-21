//
//  DazInfoController.m
//  Dazzle
//
//  Created by Leonhard Lichtschlag on 9/Feb/12.
//  Copyright (c) 2012 Leonhard Lichtschlag. All rights reserved.
//

#import "DazInfoController.h"
#import <QuartzCore/CoreAnimation.h>

// ===============================================================================================================
@implementation DazInfoController
// ===============================================================================================================


// ---------------------------------------------------------------------------------------------------------------
#pragma mark -
#pragma mark View Lifecycle
// ---------------------------------------------------------------------------------------------------------------

- (void) viewDidLoad
{
    [super viewDidLoad];
	
    
	// Configure the particle emitter to the top edge of the screen
	CAEmitterLayer *snowEmitter = [CAEmitterLayer layer];
	snowEmitter.emitterPosition = CGPointMake(self.view.bounds.size.width / 2.0, 30);
	snowEmitter.emitterSize		= CGSizeMake(self.view.bounds.size.width / 2.0, 100.0);;
	
	// Spawn points for the flakes are within on the outline of the line
	snowEmitter.emitterMode		= kCAEmitterLayerOutline;
	snowEmitter.emitterShape	= kCAEmitterLayerLine;
	
    
	// Configure the snowflake emitter cell
	CAEmitterCell *snowflake = [CAEmitterCell emitterCell];
//    粒子
	snowflake.birthRate		= 3.0;   //每秒钟产生的  粒子数量
	snowflake.lifetime		= 120.0;    //粒子生命周期
	snowflake.contents		= (id) [[UIImage imageNamed:@"DazFlake"] CGImage];
	snowflake.color			= [[UIColor colorWithRed:0.600 green:0.658 blue:0.743 alpha:1.000] CGColor];
//    发射
	snowflake.velocity		= -10;				// falling down slowly  粒子运动速度
	snowflake.velocityRange = 10;               //速度范围           
	snowflake.yAcceleration = 2;              //3个方向的 加速度
	snowflake.emissionRange = 10.5 * M_PI;		// some variation in angle  放射方向   范围
	snowflake.spinRange		= 0.25 * M_PI;		// slow spin  顺时针 旋转

//    
	// Make the flakes seem inset in the background
	snowEmitter.shadowOpacity = 1.0;
	snowEmitter.shadowRadius  = 0.0;
	snowEmitter.shadowOffset  = CGSizeMake(0.0, 1.0);
	snowEmitter.shadowColor   = [[UIColor whiteColor] CGColor];
	
	// Add everything to our backing layer below the UIContol defined in the storyboard
	snowEmitter.emitterCells = [NSArray arrayWithObject:snowflake];
	[self.view.layer insertSublayer:snowEmitter atIndex:0];
    
    
    CALayer *layer1 = [CALayer layer];
    layer1.position = CGPointMake(10,200);
    layer1.bounds = CGRectMake(0, 0, 60, 20);
    layer1.backgroundColor = [[UIColor yellowColor] CGColor];
    layer1.cornerRadius = 2;
//    layer1.shadowColor = [[UIColor blackColor] CGColor];
    layer1.shadowRadius = 4.0f;
    layer1.shadowOffset = CGSizeMake(0.0f, 3.0f);
    layer1.shadowOpacity = .8;
    layer1.opacity = 0.8;
    layer1.borderColor = [[UIColor whiteColor] CGColor];
    layer1.borderWidth = 2.0;
    //设置父容器
    CAReplicatorLayer *xLayer = [CAReplicatorLayer layer];
    xLayer.instanceCount = 11;//生成多少个字元素
    xLayer.instanceDelay = .2;//延迟生成
    xLayer.instanceGreenOffset = -.03;//绿色偏移量
    xLayer.instanceRedOffset = -.02;//红色偏移量
    xLayer.instanceBlueOffset = -.01;//蓝色偏移量
    xLayer.instanceAlphaOffset = -.05;
    xLayer.instanceTransform =CATransform3DMakeTranslation(0, -1, 0);//元素位移偏移量
    [xLayer addSublayer:layer1];//将元素加入
    
    
    xLayer.preservesDepth = YES;//superLayer是否启用3D景深计算
    //设置景深
    CATransform3D transform = CATransform3DIdentity;
    transform.m34 = -1 / 2000.0f;  
    xLayer.transform=transform;
	[self.view.layer insertSublayer:xLayer atIndex:0];
    
    ////////////////
    //创建层
    CATextLayer *layer = [CATextLayer layer];
    layer.string=@"Marshal sfsdfsdf sdfsdfsdfsdf ";
    layer.foregroundColor=[[UIColor blackColor] CGColor];
    
    layer.bounds = CGRectMake(0, 0, 200,100);
    layer.position = CGPointMake(200 , 200);//层在view的位置
    [self.view.layer addSublayer:layer];//将层加到当前View的默认layer下
    
}


- (BOOL) shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
	return (interfaceOrientation == UIDeviceOrientationPortrait);
}


@end

