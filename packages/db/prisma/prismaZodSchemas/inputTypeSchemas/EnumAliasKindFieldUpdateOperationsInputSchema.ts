import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';

export const EnumAliasKindFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAliasKindFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AliasKindSchema).optional()
}).strict() as z.ZodType<Prisma.EnumAliasKindFieldUpdateOperationsInput>;

export default EnumAliasKindFieldUpdateOperationsInputSchema;
