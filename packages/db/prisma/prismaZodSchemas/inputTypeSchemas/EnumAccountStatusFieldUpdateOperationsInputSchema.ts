import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountStatusSchema } from './AccountStatusSchema';

export const EnumAccountStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAccountStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AccountStatusSchema).optional()
}).strict() as z.ZodType<Prisma.EnumAccountStatusFieldUpdateOperationsInput>;

export default EnumAccountStatusFieldUpdateOperationsInputSchema;
