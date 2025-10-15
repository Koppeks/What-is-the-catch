import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockScalarWhereInputSchema } from './BlockScalarWhereInputSchema';
import { BlockUpdateManyMutationInputSchema } from './BlockUpdateManyMutationInputSchema';
import { BlockUncheckedUpdateManyWithoutSectionInputSchema } from './BlockUncheckedUpdateManyWithoutSectionInputSchema';

export const BlockUpdateManyWithWhereWithoutSectionInputSchema: z.ZodType<Prisma.BlockUpdateManyWithWhereWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => BlockScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BlockUpdateManyMutationInputSchema), z.lazy(() => BlockUncheckedUpdateManyWithoutSectionInputSchema) ]),
});

export default BlockUpdateManyWithWhereWithoutSectionInputSchema;
