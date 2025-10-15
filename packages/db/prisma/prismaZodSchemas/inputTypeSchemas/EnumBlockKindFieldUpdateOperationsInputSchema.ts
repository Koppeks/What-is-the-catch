import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockKindSchema } from './BlockKindSchema';

export const EnumBlockKindFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBlockKindFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => BlockKindSchema).optional(),
});

export default EnumBlockKindFieldUpdateOperationsInputSchema;
