import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:signs/binder/dashboard_bindings.dart';
import 'package:signs/config/color.dart';
import 'package:signs/splash/index.dart';
import 'package:signs/view/dashboard.dart';
import 'dart:async';
import 'package:lottie/lottie.dart';
import 'package:nb_utils/nb_utils.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.light(useMaterial3: true),
      home: MainScreen(),
      initialBinding: TranslateBindings(),
    );
  }
}

class MainScreen extends StatefulWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  @override
  Widget build(BuildContext context) {
    // SizeConfigs().init(context);
    return const SplashScreen();
  }
}

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  void flagSwitch(context) {
    Timer(const Duration(seconds: 6), () {
      Dashboard().launch(context,
          pageRouteAnimation: PageRouteAnimation.Fade, isNewTask: true);
    });
  }

  @override
  Widget build(BuildContext context) {
    flagSwitch(context);
    return Scaffold(
      backgroundColor: ColorConfig.white,
      body: Center(child: Lottie.asset("assets/lottie/newsplash.json")),
    );
  }
}
