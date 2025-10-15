import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateWithoutSectionInputSchema } from './BlockUpdateWithoutSectionInputSchema';
import { BlockUncheckedUpdateWithoutSectionInputSchema } from './BlockUncheckedUpdateWithoutSectionInputSchema';
import { BlockCreateWithoutSectionInputSchema } from './BlockCreateWithoutSectionInputSchema';
import { BlockUncheckedCreateWithoutSectionInputSchema } from './BlockUncheckedCreateWithoutSectionInputSchema';

export const BlockUpsertWithWhereUniqueWithoutSectionInputSchema: z.ZodType<Prisma.BlockUpsertWithWhereUniqueWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BlockUpdateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutSectionInputSchema) ]),
  create: z.union([ z.lazy(() => BlockCreateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedCreateWithoutSectionInputSchema) ]),
});

export default BlockUpsertWithWhereUniqueWithoutSectionInputSchema;
