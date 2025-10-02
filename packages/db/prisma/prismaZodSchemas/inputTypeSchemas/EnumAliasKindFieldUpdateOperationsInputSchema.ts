import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';

export const EnumAliasKindFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAliasKindFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => AliasKindSchema).optional(),
});

export default EnumAliasKindFieldUpdateOperationsInputSchema;
