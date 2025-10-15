import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockScalarWhereInputSchema } from './BlockScalarWhereInputSchema';
import { BlockUpdateManyMutationInputSchema } from './BlockUpdateManyMutationInputSchema';
import { BlockUncheckedUpdateManyWithoutDocumentInputSchema } from './BlockUncheckedUpdateManyWithoutDocumentInputSchema';

export const BlockUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.BlockUpdateManyWithWhereWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => BlockScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BlockUpdateManyMutationInputSchema), z.lazy(() => BlockUncheckedUpdateManyWithoutDocumentInputSchema) ]),
});

export default BlockUpdateManyWithWhereWithoutDocumentInputSchema;
