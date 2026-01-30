"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/useAuth";
import { toast } from "sonner";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye, EyeClosed, Mail, Smartphone } from "lucide-react";
import Loader from "./Loader";
import { loginMobile, loginUser, registerUser, verifyMobileOtp } from "@/api/userApis";
import getLocationFromPincode from "@/hooks/use-pincode";

export default function AuthForm({ className, type, ...props }) {
  const [loading, setLoading] = useState(false);
  const [registerType, setRegisterType] = useState("vendor");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [pinCodeLoading, setPinCodeLoading] = useState(false);
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });
  const inputs = useRef([]);
  const { fetchUser } = useAuth()

  useEffect(() => {
    if (type === "Verify" || type === "VerifyOtp") {
      setTimeLeft(60);
      const interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    } else {
      const email = sessionStorage.getItem("email");
      if (email) sessionStorage.removeItem("email");
    }
  }, [type]);

  const router = useRouter();

  const pincodeTimeout = useRef(null);

  const handlePincodeChange = (e) => {
    const pincode = e.target.value;

    if (pincode.length === 0) {
      setLocation({ city: "", state: "", country: "" });
      return;
    }

    if (pincode.length < 6) return;

    clearTimeout(pincodeTimeout.current);

    pincodeTimeout.current = setTimeout(async () => {
      try {
        setPinCodeLoading(true);

        const res = await getLocationFromPincode(pincode);

        if (!res) {
          toast.error("Invalid Pincode!", {
            description: "Please enter a valid pincode.",
          });
          setLocation({ city: "", state: "", country: "" });
          return;
        }

        setLocation(res);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setPinCodeLoading(false);
      }
    }, 750);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");
    const formData = Object.fromEntries(data.entries());

    if (type === "SignIn") {
      try {
        setLoading(true);

        const res = await loginUser({ email, password })

        if (res.status === "success") {
          router.replace("/");
          await fetchUser()
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (type === "SignInOtp") {
      try {
        setLoading(true);
        const mobile = data.get("mobile");

        const res = await loginMobile({ mobile })
        if (res.status === 'success') {
          sessionStorage.setItem("mobile", mobile);
          toast.success(res.message);
          router.push("/verify-otp");
        }

      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (type === "VerifyOtp") {
      try {
        setLoading(true);

        const otp = inputs.current.map((i) => i.value).join("");
        if (otp.length < 6) {
          toast.error("Invalid OTP");
          return;
        }

        const mobile = sessionStorage.getItem("mobile");
        const res = await verifyMobileOtp({ mobile, otp })
        if (res.status === "success") {
          await fetchUser()
          sessionStorage.removeItem("mobile");
          toast.success('Login successful!');
          router.replace("/");
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (type === "SignUp") {
      try {
        setLoading(true);
        const res = await registerUser(formData);
        if (res.status === 'success') {
          await fetchUser()
          toast.success('Registration successful!');
          router.replace('/');
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    // if (type === "Verify") {
    //   try {
    //     setLoading(true);

    //     const otp = inputs.current.map((i) => i.value).join("");
    //     if (otp.length < 6) {
    //       toast.error("Invalid OTP");
    //       return;
    //     }

    //     const email = sessionStorage.getItem("email");

    //     const res = IS_DEMO
    //       ? await demoVerify()
    //       : await verifyEmail({ email, otp });

    //     if (res.status === "success") {
    //       router.push("/");
    //       sessionStorage.removeItem("email");
    //     }
    //   } catch (error) {
    //     toast.error(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // if (type === "Forgot") {
    //   try {
    //     setLoading(true);

    //     // ❌ REAL
    //     // const res = await forgotPassword({ email })

    //     // ✅ DEMO
    //     const res = IS_DEMO
    //       ? await demoForgot()
    //       : await forgotPassword({ email });

    //     toast.success(res.message);
    //     router.push("/sign-in");
    //   } catch (error) {
    //     toast.error(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // if (type === "Reset") {
    //   try {
    //     setLoading(true);

    //     // ❌ REAL
    //     // const res = await resetPassword(token, { password })

    //     // ✅ DEMO
    //     const res = IS_DEMO
    //       ? await demoReset()
    //       : await resetPassword(token, { password });

    //     toast.success(res.message);
    //     router.push("/sign-in");
    //   } catch (error) {
    //     toast.error(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text");
    const digits = pasteData.split("").filter((char) => /^\d$/.test(char));
    digits.forEach((digit, idx) => {
      if (inputs.current[idx]) {
        inputs.current[idx].value = digit;
        if (idx < inputs.current.length - 1) {
          inputs.current[idx + 1].focus();
        }
      }
    });
    e.preventDefault();
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) {
      return;
    }

    e.target.value = value;

    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    try {
      if (type === "VerifyOtp") {
        const mobile = sessionStorage.getItem("mobile");
        const res = await loginMobile({ mobile })
        console.log(res)
      }

      toast.success("OTP resent successfully");
      setTimeLeft(60);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={cn("flex flex-col gap-6", className)}
            {...props}
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className="text-2xl font-bold text-orangeClr">
                {type === "SignIn"
                  ? "Login to your account"
                  : type === "SignUp"
                    ? "Register your account"
                    : type === "SignInOtp"
                      ? "Login with Mobile"
                      : type === "VerifyOtp"
                        ? "Verify Mobile OTP"
                        : type === "Verify" || type === "VerifyOtp"
                          ? " verify your OTP"
                          : type === "Forgot"
                            ? "Reset Password"
                            : type === "Reset"
                              ? "Reset Password"
                              : ""}
              </h1>

              <p className="text-muted-foreground text-xs text-balance">
                Enter your details below to
                {type === "SignIn"
                  ? " login to your account"
                  : type === "SignUp"
                    ? " register your account"
                    : type === "Verify" || type === "VerifyOtp"
                      ? " verify your OTP"
                      : type === "Forgot"
                        ? " reset your password"
                        : type === "Reset"
                          ? " reset your password"
                          : ""}
              </p>
            </div>
            <div className="grid sm:gap-4 gap-3">
              {type === "SignUp" && (
                <div className="grid gap-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Enter your Full Name"
                    required
                  />
                </div>
              )}
              {(type === "SignIn" ||
                type === "SignUp" ||
                type === "Forgot") && (
                  <div
                    className={`grid ${type === "SignUp" && "sm:grid-cols-2"
                      } gap-2`}
                  >
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    {type === "SignUp" && (
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Mobile</Label>
                        <Input
                          id="phone"
                          type="tel"
                          name="mobile"
                          placeholder="Enter your phone number"
                          maxLength={10}
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9+]/g,
                              ""
                            );
                          }}
                          required
                        />
                      </div>
                    )}
                  </div>
                )}
              {type === "SignUp" && (
                <div className="flex flex-col gap-4">
                  <Label>Register as:</Label>
                  <RadioGroup
                    defaultValue="vendor"
                    className={"col-span-2 flex flex-1"}
                    onValueChange={(value) => setRegisterType(value)}
                    name="role"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vendor" id="vendor" />
                      <Label htmlFor="vendor">VENDOR</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="user" id="user" />
                      <Label htmlFor="user">INDIVIDUAL</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}
              {type === "SignUp" && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {registerType === "vendor" ? (
                    <>
                      <div className="grid gap-2">
                        <Label htmlFor="companyName">Company name</Label>
                        <Input
                          id="companyName"
                          type="text"
                          name="companyName"
                          placeholder="Enter your Company name"
                          required
                        />
                      </div>
                      <div className="grid gap-2 relative">
                        <Label htmlFor="gst" className={'gap-1'}>GST <span className="font-normal text-xs">(optional)</span></Label>
                        <Input
                          id="gst"
                          type="text"
                          name="gst"
                          placeholder="Enter your GST"
                          required
                        />
                      </div>
                      <div className="grid sm:col-span-2 gap-2">
                        <Label htmlFor="companyAddress">Company address</Label>
                        <Input
                          id="companyAddress"
                          type="text"
                          name="companyAddress"
                          // value={location.city}
                          placeholder="Enter your city"
                          required
                        />
                      </div>
                    </>
                  ) : (
                    <div className="grid gap-2 sm:col-span-2">
                      <Label htmlFor="profession">Profession</Label>
                      <Select name="profession" required>
                        <SelectTrigger id="profession" className="w-full">
                          <SelectValue placeholder="Select Profession" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="doctor">Doctor</SelectItem>
                          <SelectItem value="engineer">Engineer</SelectItem>
                          <SelectItem value="teacher">Teacher</SelectItem>
                          <SelectItem value="business">Business Owner</SelectItem>
                          <SelectItem value="it">IT Professional</SelectItem>
                          <SelectItem value="government">Government Employee</SelectItem>
                          <SelectItem value="private">Private Job</SelectItem>
                          <SelectItem value="self-employed">Self Employed</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              )}
              {type === "SignUp" && (
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="grid gap-2 relative">
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      type="number"
                      name="pincode"
                      onInput={(e) => {
                        e.target.value = e.target.value.slice(0, 6)
                        handlePincodeChange(e)
                      }}
                      placeholder="Enter your pincode"
                      required
                    />
                    {pinCodeLoading && (
                      <div className="absolute top-[29px] right-2 animate-spin rounded-full h-5 w-5 border-3 border-yellowClr border-t-transparent"></div>
                    )}
                  </div>
                  <div className="grid gap-2 relative">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      type="text"
                      name="state"
                      value={location.state}
                      readOnly
                      placeholder="Enter your State"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      type="text"
                      name="city"
                      value={location.city}
                      readOnly
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                </div>
              )}
              {(type === "SignIn" || type === "SignUp" || type === "Reset") && (
                <div className="grid gap-2 relative">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {type === "SignIn" && (
                      <Link
                        href="/forgot-password"
                        className="ml-auto text-xs text-gray-600 hover:text-gray-800 underline-offset-4 hover:underline"
                        tabIndex={-1}
                      >
                        Forgot your password?
                      </Link>
                    )}
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    size={"icon"}
                    variant={"ghost"}
                    className={`absolute right-0 ${type === "SignIn" ? "top-[23px]" : "top-[21px]"
                      } hover: bg-transparent cursor-pointer`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeClosed size={16} aria-hidden="true" />
                    ) : (
                      <Eye size={16} aria-hidden="true" />
                    )}
                  </Button>
                </div>
              )}
              {type === "Reset" && (
                <div className="grid gap-2 relative">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    size={"icon"}
                    variant={"ghost"}
                    className={`absolute right-0 ${type === "SignIn" ? "top-[23px]" : "top-[21px]"
                      } hover: bg-transparent cursor-pointer`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeClosed size={16} aria-hidden="true" />
                    ) : (
                      <Eye size={16} aria-hidden="true" />
                    )}
                  </Button>
                </div>
              )}
              {/* {type === "SignUp" && (
                <div className="space-y-4">
                  <Label>Where you heared about us?</Label>
                  <RadioGroup className="flex flex-wrap sm:gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="social" id="social" />
                      <Label htmlFor="social">Social Media</Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="google" id="google" />
                      <Label htmlFor="google">Google Search</Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="ads" id="ads" />
                      <Label htmlFor="ads">Online Ads</Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="referral" id="referral" />
                      <Label htmlFor="referral">Friend / Referral</Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              )} */}
              {type === "SignUp" && (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="accent-orangeClr"
                    required
                  />
                  <Label htmlFor="terms" className={"text-xs"}>
                    I agree to the terms and privacy policy.
                  </Label>
                </div>
              )}

              {type === "SignInOtp" && (
                <div className="grid gap-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    //   type="tel"
                    placeholder="Enter mobile number"
                    //   maxLength={10}
                    type="text"
                    inputMode="numeric"
                    maxLength={10}
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/g, ""))
                    }
                    required
                  />
                </div>
              )}

              {(type === "Verify" || type === "VerifyOtp") && (
                <div>
                  <div
                    onPaste={handlePaste}
                    className="flex justify-between gap-2 mb-2"
                  >
                    {Array.from({ length: 6 }, (_, index) => (
                      <input
                        key={index}
                        name={`otp${index}`}
                        ref={(el) => (inputs.current[index] = el)}
                        type="number"
                        inputMode="numeric"
                        maxLength="6"
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-10 h-10 text-center bg-gray-200 rounded-xl text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orangeClr duration-200"
                      />
                    ))}
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full cursor-pointer">
                {loading ? (
                  <Loader />
                ) : type === "SignIn" ? (
                  "Sign In"
                ) : type === "SignUp" ? (
                  "Sign Up"
                ) : type === "SignInOtp" ? (
                  "Send OTP"
                ) : type === "VerifyOtp" ? (
                  "Verify & Login"
                ) : type === "Verify" ? (
                  "Verify"
                ) : type === "Forgot" ? (
                  "Set Password Reset Link"
                ) : type === "Reset" ? (
                  "Reset Password"
                ) : (
                  ""
                )}
              </Button>

              {type === "SignIn" && (
                <Button asChild variant={'outline'} className={'gap-1 text-black'}>
                  <Link href="/sign-in-otp">
                    Login via Mobile <Smartphone size={16} />
                  </Link>
                </Button>
              )}
              {type === "SignInOtp" && (
                <Button asChild variant={'outline'} className={'gap-1 text-black'}>
                  <Link href="/sign-in">
                    Login via Email <Mail size={16} />
                  </Link>
                </Button>
              )}

              {(type === "Verify" || type === "VerifyOtp") && (
                <div>
                  {timeLeft !== 0 ? (
                    <p className="text-sm text-center text-neutral-800">
                      Resend OTP <span>in 00:{timeLeft}</span>
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="w-full text-sm cursor-pointer font-semibold text-orangeClr"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              )}
            </div>
          </form>

          <div className="grid gap-6 mt-6">
            <div className="flex items-center justify-center gap-2 text-sm">
              <div className="text-gray-600">
                {type === "SignIn"
                  ? "Don't have an account?"
                  : type === "SignUp"
                    ? "Already have an account?"
                    : "Back to"}
              </div>
              <Link
                href={
                  type === "SignIn"
                    ? "/sign-up"
                    : type === "SignUp"
                      ? "/sign-in"
                      : "/sign-in"
                }
                className="underline underline-offset-4"
              >
                {type === "SignIn"
                  ? "Sign Up"
                  : type === "SignUp"
                    ? "Sign In"
                    : "Sign In"}
                {loading && type === "SignIn" ? "..." : "..."}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
