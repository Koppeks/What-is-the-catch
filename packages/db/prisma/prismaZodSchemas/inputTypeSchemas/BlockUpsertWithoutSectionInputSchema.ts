import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockUpdateWithoutSectionInputSchema } from './BlockUpdateWithoutSectionInputSchema';
import { BlockUncheckedUpdateWithoutSectionInputSchema } from './BlockUncheckedUpdateWithoutSectionInputSchema';
import { BlockCreateWithoutSectionInputSchema } from './BlockCreateWithoutSectionInputSchema';
import { BlockUncheckedCreateWithoutSectionInputSchema } from './BlockUncheckedCreateWithoutSectionInputSchema';
import { BlockWhereInputSchema } from './BlockWhereInputSchema';

export const BlockUpsertWithoutSectionInputSchema: z.ZodType<Prisma.BlockUpsertWithoutSectionInput> = z.strictObject({
  update: z.union([ z.lazy(() => BlockUpdateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutSectionInputSchema) ]),
  create: z.union([ z.lazy(() => BlockCreateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedCreateWithoutSectionInputSchema) ]),
  where: z.lazy(() => BlockWhereInputSchema).optional(),
});

export default BlockUpsertWithoutSectionInputSchema;
