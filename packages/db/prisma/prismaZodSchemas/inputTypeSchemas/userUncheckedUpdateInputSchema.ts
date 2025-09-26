import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AvailableRolesSchema } from './AvailableRolesSchema';
import { EnumAvailableRolesFieldUpdateOperationsInputSchema } from './EnumAvailableRolesFieldUpdateOperationsInputSchema';
import { AccountStatusSchema } from './AccountStatusSchema';
import { EnumAccountStatusFieldUpdateOperationsInputSchema } from './EnumAccountStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const userUncheckedUpdateInputSchema: z.ZodType<Prisma.userUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userRole: z.union([ z.lazy(() => AvailableRolesSchema),z.lazy(() => EnumAvailableRolesFieldUpdateOperationsInputSchema) ]).optional(),
  subscriptionStatus: z.union([ z.lazy(() => AccountStatusSchema),z.lazy(() => EnumAccountStatusFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.userUncheckedUpdateInput>;

export default userUncheckedUpdateInputSchema;
