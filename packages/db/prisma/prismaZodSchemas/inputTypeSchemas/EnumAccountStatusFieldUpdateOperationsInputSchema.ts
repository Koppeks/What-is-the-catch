import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountStatusSchema } from './AccountStatusSchema';

export const EnumAccountStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAccountStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => AccountStatusSchema).optional(),
});

export default EnumAccountStatusFieldUpdateOperationsInputSchema;
