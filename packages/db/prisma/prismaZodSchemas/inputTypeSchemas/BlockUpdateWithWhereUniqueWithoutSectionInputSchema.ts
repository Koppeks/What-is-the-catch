import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateWithoutSectionInputSchema } from './BlockUpdateWithoutSectionInputSchema';
import { BlockUncheckedUpdateWithoutSectionInputSchema } from './BlockUncheckedUpdateWithoutSectionInputSchema';

export const BlockUpdateWithWhereUniqueWithoutSectionInputSchema: z.ZodType<Prisma.BlockUpdateWithWhereUniqueWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BlockUpdateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutSectionInputSchema) ]),
});

export default BlockUpdateWithWhereUniqueWithoutSectionInputSchema;
